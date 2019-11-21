const md = `import React, { useState, useRef, useEffect } from 'react'
import Table, { Th, Td } from 'designare-table'

const originData = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

export default function () {
    const [data, setData] = useState(originData)

    const companyEditor = ({ value, row, dataKey }) => {
        const ref = useRef(null)
        const [isEditing, setEditing] = useState(false)
        const [txt, setTxt] = useState('')
        const save = evt => {
            row[dataKey] = txt
            setData(Array.from(data))
            setEditing(false)
        }
        const onEnter = evt => evt.keyCode === 13 ? save() : undefined

        useEffect(() => {
            isEditing ? ref.current.focus() : undefined
            isEditing ? setTxt(value) : undefined
        }, [isEditing, value])

        return (
            <Td
                onClick={evt => isEditing ? undefined : setEditing(true)}
                style={{ cursor: 'pointer', background: '#fbfbfb' }}>
                {
                    isEditing
                        ? <input
                            ref={ref}
                            value={txt}
                            onKeyUp={onEnter}
                            onChange={evt => setTxt(evt.target.value)}
                            onBlur={evt => setEditing(false)}
                            style={{ fontSize: 'inherit' }}
                        />
                        : value
                }
            </Td>
        )
    }

    return (
        <Table
            columns={[
                {
                    Header: <Th style={{ background: '#fbfbfb' }}>COMPANY</Th>,
                    dataKey: 'name',
                    Cell: companyEditor
                },
                {
                    Header: 'Last',
                    dataKey: 'last',
                },
                {
                    Header: 'CHG',
                    dataKey: 'chg'
                },
                {
                    Header: 'CHG%',
                    dataKey: 'chgp'
                }
            ]}
            data={data}
        />
    )
}`
export default md
