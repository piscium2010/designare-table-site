const md = `import React, { useState } from 'react'
import Table, { Td } from 'designare-table'

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
        if (isEditing) return
        const s = new Set(selection)
        evt.target.checked ? s.add(id) : s.delete(id)
        setSelection([...s])
    }

    const onEdit = () => {
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

    const onCancel = () => setEditing(false)

    const editableCell = ({ row, dataKey }) => {
        const value = row[dataKey] + ''
        const [state, setState] = useState({ txt: value, size: value.length })

        const onChange = newValue => {
            map.get(row.id)[dataKey] = newValue
            setState({ ...state, txt: newValue })
        }

        return (
            <Td>
                {
                    isEditing && selection.includes(row.id)
                        ? <input
                            value={state.txt}
                            onChange={evt => onChange(evt.target.value)}
                            style={{ fontSize: 'inherit' }}
                            size={state.size}
                        />
                        : value
                }
            </Td>
        )
    }

    const checkbox = ({ row }) => (
        <Td>
            <input
                type='checkbox'
                style={{ cursor: isEditing ? 'not-allowed' : 'pointer' }}
                onChange={evt => onToggle(evt, row.id)}
                checked={selection.includes(row.id)}
            />
        </Td>
    )

    return (
        <div>
            {isEditing && <button onClick={onSave}>Save</button>}
            {isEditing && <button onClick={onCancel}>Cancel</button>}
            {!isEditing && <button onClick={onEdit} disabled={selection.length === 0}>Edit</button>}

            <Table
                columns={[
                    {
                        Header: '',
                        Cell: checkbox
                    },
                    {
                        Header: 'COMPANY',
                        dataKey: 'name',
                        Cell: editableCell
                    },
                    {
                        Header: 'Last',
                        dataKey: 'last',
                        Cell: editableCell
                    },
                    {
                        Header: 'CHG',
                        dataKey: 'chg',
                        Cell: editableCell
                    },
                    {
                        Header: 'CHG%',
                        dataKey: 'chgp',
                        Cell: editableCell
                    }
                ]}
                data={data}
            />
        </div>
    )
}`
export default md
