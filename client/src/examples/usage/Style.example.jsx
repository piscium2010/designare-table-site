import React from 'react'
import Table, { Thead, Tbody } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

export default function () {

    const tr = ({ rowIndex, cells }) => (
        <tr style={{ backgroundColor: rowIndex % 2 === 0 ? '#f2f2f2' : '#fff' }}>
            {cells}
        </tr>
    )
    
    return (
        <Table
            columns={[
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
            <Thead style={{ backgroundColor: '#fff', textAlign: 'left' }} />
            <Tbody tr={tr} />
        </Table>
    )
}