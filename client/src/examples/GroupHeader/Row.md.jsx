const md = `import React from 'react'
import Table, { Thead, Tbody } from './node_modules/designare-table'


const data = [
    { name: 'Adaptimmune Ther Ads', last: 0.97, chg: -0.03, chgp: -3.09, high: -91.25, low: 2.00 },
    { name: 'Aileron Therapeutics Inc', last: 0.42, chg: 0.01, chgp: 1.28, high: -83.88, low: 4.72 },
    { name: 'Andersons Inc', last: 17.84, chg: -0.54, chgp: -2.94, high: -53.33, low: 0.17 },
    { name: 'Asia Pacific Wire & Cable', last: 1.38, chg: -0.04, chgp: -2.9, high: -43.44, low: 3.76 },
    { name: 'Avalon Globocare', last: 1.59, chg: -0.01, chgp: -0.62, high: -88.22, low: 0.63 }
]

export default function () {
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
                },
                {
                    Header: '52W',
                    children: [
                        {
                            Header: 'High',
                            dataKey: 'high'
                        },
                        {
                            Header: 'Low',
                            dataKey: 'low'
                        }
                    ]
                }
            ]}
            data={data}
        >
            <Thead tr={({ cells }) => <tr style={{height: 30}}>{cells}</tr>} />
            <Tbody />
        </Table>
    )
}`
export default md
