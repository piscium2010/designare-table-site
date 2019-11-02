import React, { useState } from 'react'
import Table, { Thead, Tbody } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

export default function () {
    const [store] = useState({})
    const [hoverIndex, setHoverIndex] = useState({ i: undefined })
    const getH = () => {
        console.log(`hoverIndex`, store.i)
        return store.i
    }

    const onMouseOver = evt => {
        const rowIndex = evt.currentTarget.dataset['i']
        console.log(`over`, hoverIndex, rowIndex)
        setHoverIndex({ i: rowIndex })
        store.i = rowIndex
    }
    const onMouseLeave = evt => {
        const rowIndex = evt.currentTarget.dataset['i']
        console.log(`leave`, rowIndex)


        setTimeout(() => {
            // console.log(`hoverIndex`,getH())
            rowIndex === getH()
                ? setHoverIndex({ i: undefined })
                : undefined
        }, 100)
    }
    return (
        <Table
            columns={[
                {
                    Header: 'COMPANY',
                    dataKey: 'name'
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
            <Tbody tr={({ cells, rowIndex }) => (
                <tr
                    className={`${rowIndex == hoverIndex.i ? 'designare-transition' : ''}`}
                    style={{ cursor: 'pointer', backgroundColor: rowIndex == hoverIndex.i ? 'aliceblue' : '' }}
                    data-i={rowIndex}
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                >
                    {cells}
                </tr>
            )}
            />
        </Table >
    )
}