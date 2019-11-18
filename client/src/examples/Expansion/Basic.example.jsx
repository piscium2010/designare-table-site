import React, { useState } from 'react'
import Table, { Thead, Tbody, Td, Icons } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75, desc: 'Lorem ipsum, dolor sit amet.' },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93, desc: 'Lorem ipsum, dolor sit amet.' },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85, desc: 'Lorem ipsum, dolor sit amet.' },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04, desc: 'Lorem ipsum, dolor sit amet.' },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09, desc: 'Lorem ipsum, dolor sit amet.' }
]

const style = { display: 'flex', alignItems: 'center', userSelect: 'none', cursor: 'pointer' }

export default function () {
    const [keys, setKeys] = useState(new Set())
    const onToggle = index => {
        keys.has(index) ? keys.delete(index) : keys.add(index)
        setKeys(new Set(keys))
    }

    const checkbox = ({ rowIndex }) => {
        const collapsed = keys.has(rowIndex)
        return (
            <Td>
                <div
                    className='designare-transition'
                    style={{ ...style, color: collapsed ? '#1890ff' : 'gray' }}
                    onClick={evt => onToggle(rowIndex)}>
                    {
                        collapsed
                            ? <Icons.MinusSquare />
                            : <Icons.PlusSquare />
                    }
                </div>
            </Td>
        )
    }

    const expandableTr = ({ row, rowIndex, cells, getColumns }) => {
        const Desc = () => keys.has(rowIndex)
            ? <tr><td colSpan={getColumns().length}>{row['desc']}</td></tr>
            : null
        return [<tr key={0}>{cells}</tr>, <Desc key={1} />]
    }

    return (
        <Table
            columns={[
                {
                    Header: '',
                    Cell: checkbox
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
                    Header: 'CHG%',
                    dataKey: 'chgp'
                }
            ]}
            data={data}
        >
            <Thead />
            <Tbody tr={expandableTr} />
        </Table>
    )
}

