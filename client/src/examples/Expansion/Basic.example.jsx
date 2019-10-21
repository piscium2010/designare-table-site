import React, { useState } from 'react'
import Table, { Thead, Tbody, Td, Icons } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75, desc: 'Lorem ipsum, dolor sit amet.' },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93, desc: 'Lorem ipsum, dolor sit amet.' },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85, desc: 'Lorem ipsum, dolor sit amet.' },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04, desc: 'Lorem ipsum, dolor sit amet.' },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09, desc: 'Lorem ipsum, dolor sit amet.' }
]

const style={display: 'flex', alignItems: 'center', userSelect: 'none', cursor:'pointer'}

export default function () {
    const [selectedKeys, setSelectedKeys] = useState([])
    const onToggle = (evt, index) => {
        const s = new Set(selectedKeys)
        s.has(index) ? s.delete(index) : s.add(index)
        setSelectedKeys([...s])
    }
    return (
        <Table
            columns={[
                {
                    Header: '',
                    Cell: ({ rowIndex }) => {
                        const collapsed = selectedKeys.includes(rowIndex)
                        return (
                            <Td>
                                <div
                                    className='designare-transition'
                                    style={{...style, color: collapsed ? '#1890ff':'gray'}}
                                    onClick={evt => onToggle(evt, rowIndex)}>
                                    {
                                        collapsed
                                            ? <Icons.MinusSquare style={{ width: 14 }} />
                                            : <Icons.PlusSquare style={{ width: 14 }} />
                                    }
                                </div>
                            </Td>
                        )
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
