const md = `import React from 'react'
import Table, { Td } from 'designare-table'

const data = [
    { name: 'Chevron Corp.', last: 115.35, chg: 0.24, chgp: 0.21 },
    { name: 'Verizon Communications Inc.', last: 60.41, chg: 0.12, chgp: 0.20 },
    { name: 'Visa Inc. Cl A', last: 177.94, chg: 0.07, chgp: 0.04 },
    { name: 'Procter & Gamble Co.', last: 116.63, chg: -0.15, chgp: -0.13 },
    { name: 'Exxon Mobil Corp.', last: 68.14, chg: -0.09, chgp: -0.13 }
]

export default function () {
    const cell = ({ value }) => (
        <Td style={{ color: value > 0 ? '#0f9d58' : '#b51a28' }}>
            {value}
        </Td>
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
                    dataKey: 'chg',
                    Cell: cell
                },
                {
                    Header: 'CHG%',
                    dataKey: 'chgp',
                    Cell: cell
                }
            ]}
            data={data}
        />
    )
}`
export default md
