const md = `import React, { Fragment } from 'react'
import Table, { Thead, Tbody, Td } from 'designare-table'


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
                    dataKey: 'chgp',
                },
                {
                    Header: '52W',
                    colSpan: 2,
                    Cell: ({ row }) => (
                        <Fragment>
                            <Td>{row['low']}</Td>
                            <Td>{row['high']}</Td>
                        </Fragment>
                    ),
                    width: 150
                },
            ]}
            rowHeight={38}
            data={data}
        />
    )
}`
export default md
