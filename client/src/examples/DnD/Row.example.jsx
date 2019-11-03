import React, { useState } from 'react'
import Table, { Thead, Tbody, DraggableTr } from 'designare-table'

const originalData = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

const style = { cursor: 'move' }

export default function () {
    const [data, setData] = useState(originalData)
    return (
        <Table
            data={data}
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
            onChangeRows={data => {
                setData(data)
            }}
        >
            <Thead />
            <Tbody tr={
                ({ cells, row }) => (
                    <DraggableTr
                        row={row}
                        getRowId={row => row.name}
                        style={style}
                    >
                        {cells}
                    </DraggableTr>
                )}
            />
        </Table>
    )
}