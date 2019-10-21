const md = `import React, { useState } from 'react'
import Table, { Thead, Tbody, Td } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

export default function () {
    const [selectedKeys, setSelectedKeys] = useState([])
    const onToggle = (evt, index) => {
        const s = new Set(selectedKeys)
        evt.target.checked ? s.add(index) : s.delete(index)
        setSelectedKeys([...s])
    }

    return (
        <Table
            columns={[
                {
                    Header: '',
                    Cell: ({ rowIndex }) => {
                        const checked = selectedKeys.includes(rowIndex)
                        return <Td><input type='checkbox' onChange={evt => onToggle(evt, rowIndex)} checked={checked} /></Td>
                    }
                },
                {
                    Header: 'COMPANY',
                    dataKey: 'name',
                    width: '*'
                },
                {
                    Header: 'LAST',
                    dataKey: 'last'
                },
                {
                    Header: 'CHG',
                    dataKey: 'chg'
                },
                {
                    Header: 'CHG %',
                    dataKey: 'chgp'
                }
            ]}
            data={data}
        >
            <Thead />
            <Tbody
                tr={({ rowIndex, cells }) => {
                    return <tr>{cells}</tr>
                }}
            />
        </Table>
    )
}`
export default md
