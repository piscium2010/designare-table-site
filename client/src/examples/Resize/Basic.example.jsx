import React, { useState } from 'react'
import Table, { Th, Td, Thead, Tbody } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

export default function () {
    const style = { borderRightColor: 'rgba(0, 0, 0, 0.12)' }
    return (
        <div>
            <Table
                columns={[
                    {
                        Header: <Th style={style}>COMPANY</Th>,
                        dataKey: 'name',
                        Cell: ({ value }) => <Td style={style}>{value}</Td>
                    },
                    {
                        Header: <Th style={style}>LAST</Th>,
                        dataKey: 'last',
                        Cell: ({ value }) => <Td style={style}>{value}</Td>
                    },
                    {
                        Header: <Th style={style}>CHG</Th>,
                        dataKey: 'chg',
                        Cell: ({ value }) => <Td style={style}>{value}</Td>
                    },
                    {
                        Header: <Th>CHG %</Th>,
                        dataKey: 'chgp',
                        Cell: ({ value }) => <Td>{value}</Td>
                    }
                ]}
                data={data}
            >
            </Table>
        </div>
    )
}