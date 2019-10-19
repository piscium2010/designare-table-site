const md = `import React, { useState } from 'react'
import Table, { Th, Td } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

export default function () {
    const [selectAll, setSelectAll] = useState(false)
    const [selectedKeys, setSelectedKeys] = useState([])

    const onToggleAll = evt => {
        const checked = evt.target.checked
        setSelectAll(checked)
        checked ? undefined : setSelectedKeys([])
    }

    const onToggle = (evt, index) => {
        const s = new Set(selectedKeys)
        evt.target.checked ? s.add(index) : s.delete(index)
        setSelectedKeys([...s])
    }

    return (
        <Table
            columns={[
                {
                    Header: () => (
                        <Th>
                            <input
                                type='checkbox'
                                onChange={onToggleAll}
                                checked={selectAll}
                            />
                        </Th>
                    ),
                    Cell: ({ rowIndex }) => (
                        <Td style={{ textAlign: 'center' }} >
                            <input
                                type='checkbox'
                                onChange={evt => onToggle(evt, rowIndex)}
                                checked={selectAll || selectedKeys.includes(rowIndex)}
                            />
                        </Td>
                    ),
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
        />
    )
}`
export default md
