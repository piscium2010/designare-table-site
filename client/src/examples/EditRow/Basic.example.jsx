import React, { useState, useRef, useEffect } from 'react'
import Table, { Th, Td } from 'designare-table'

const originData = [
    { id: 0, name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { id: 1, name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { id: 2, name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { id: 3, name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { id: 4, name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

export default function () {
    const [data, setData] = useState(originData)
    const [isEditing, setEditing] = useState(false)
    const [selection, setSelection] = useState([])
    const [map] = useState(new Map())

    const onToggle = (evt, id) => {
        const { checked } = evt.target
        const s = new Set(selection)
        checked ? s.add(id) : s.delete(id)
        setSelection([...s])
    }

    const onEdit = evt => {
        map.clear()
        selection.forEach(id => {
            const one = data.find(i => i.id === id)
            map.set(id, { ...one })
        })
        setEditing(true)
    }

    const onSave = () => {
        map.forEach((newValue, id) => {
            const one = data.find(i => i.id === id)
            Object.assign(one, newValue)
        })
        setEditing(false)
        setData(Array.from(data))
    }

    const onCancel = () => { setEditing(false) }

    const EditableCell = ({ value, row, dataKey }) => {
        const [txt, setTxt] = useState('')
        const [size, setSize] = useState(3)
        const onChange = newValue => {
            map.get(row.id)[dataKey] = newValue
            setTxt(newValue)
        }
        useEffect(() => {
            let str = value + ''
            isEditing ? setTxt(str) : undefined
            // isEditing ? setSize(Math.max(3, str.length)) : undefined
        }, [isEditing])
        return (
            <Td>
                {
                    isEditing && selection.includes(row.id)
                        ? <input
                            value={txt}
                            onChange={evt => onChange(evt.target.value)}
                            style={{ fontSize: 'inherit' }}
                            // size={size}
                        />
                        : value
                }
            </Td>
        )
    }


    return (
        <div>
            {isEditing && <button onClick={onSave}>Save</button>}
            {isEditing && <button onClick={onCancel}>Cancel</button>}
            {!isEditing && <button onClick={onEdit} disabled={selection.length === 0}>Edit</button>}

            <Table
                columns={[
                    {
                        Header: '',
                        Cell: ({ row }) => {
                            const checked = selection.includes(row.id)
                            return (
                                <Td>
                                    <input type='checkbox' onChange={evt => onToggle(evt, row.id)} checked={checked} />
                                </Td>
                            )
                        }
                    },
                    {
                        Header: <Th style={{ background: '#fbfbfb' }}>COMPANY</Th>,
                        dataKey: 'name',
                        Cell: EditableCell
                    },
                    {
                        Header: 'Last',
                        dataKey: 'last',
                        Cell: EditableCell
                    },
                    {
                        Header: 'CHG',
                        dataKey: 'chg',
                        Cell: EditableCell
                    },
                    {
                        Header: 'CHG %',
                        dataKey: 'chgp',
                        Cell: EditableCell
                    }
                ]}
                data={data}
            />
        </div>
    )
}