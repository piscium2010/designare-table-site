import React, { useState } from 'react'
import Table, { Thead, Tbody, Td } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75, desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, natus.' },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93, desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, natus.' },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85, desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, natus.' },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04, desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, natus.' },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09, desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, natus.'}
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
                        return (
                            <Td>
                                <input
                                    type='checkbox'
                                    onChange={evt => onToggle(evt, rowIndex)}
                                    checked={checked}
                                />
                            </Td>
                        )
                    },
                    width: 30
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
                tr={({ row, rowIndex, cells, getColumns }) => {
                    const Desc = () => selectedKeys.includes(rowIndex)
                        ? <tr><td colSpan={getColumns().length}>{row['desc']}</td></tr>
                        : null
                    return [<tr key={0}>{cells}</tr>, <Desc key={1} />]
                }}
            />
        </Table>
    )
}