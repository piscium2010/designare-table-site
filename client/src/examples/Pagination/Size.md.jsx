const md = `import React from 'react'
import Table from 'designare-table'

const data = [
    { name: 'UnitedHealth Group Inc.', last: 243.67, chg: 6.68, chgp: 2.82 },
    { name: 'Walgreens Boots Alliance Inc.', last: 55.94, chg: 1.28, chgp: 2.34 },
    { name: 'Dow Inc.', last: 47.81, chg: 0.69, chgp: 1.46 },
    { name: 'Caterpillar Inc.', last: 131.04, chg: 1.88, chgp: 1.46 },
    { name: 'American Express Co.', last: 119.10, chg: 1.69, chgp: 1.44 },
    { name: 'Walt Disney Co.', last: 132.37, chg: 1.51, chgp: 1.15 },
    { name: 'United Technologies Corp.', last: 138.17, chg: 1.46, chgp: 1.07 },
    { name: '3M Co.', last: 163.54, chg: 1.36, chgp: 0.84 },
    { name: 'Johnson & Johnson', last: 136.17, chg: 1.00, chgp: 0.74 },
    { name: 'Nike Inc. Cl B', last: 95.56, chg: 0.68, chgp: 0.72 },
    { name: 'Coca-Cola Co.', last: 53.79, chg: 0.30, chgp: 0.56 },
    { name: 'JPMorgan Chase & Co.', last: 120.35, chg: 0.67, chgp: 0.56 },
    { name: 'Cisco Systems Inc.', last: 47.03, chg: 0.24, chgp: 0.51 },
    { name: 'Apple Inc.', last: 235.28, chg: 0.91, chgp: 0.39 },
    { name: 'Home Depot Inc.', last: 236.77, chg: 0.87, chgp: 0.37 },
    { name: 'Walmart Inc.', last: 119.84, chg: 0.42, chgp: 0.35 },
    { name: 'Pfizer Inc.', last: 36.46, chg: 0.12, chgp: 0.33 }
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
                    Header: 'CHG%',
                    dataKey: 'chgp'
                }
            ]}
            data={data}
            defaultPageSize={5}
            pageSizeOptions={[5,10]}
        />
    )
}`
export default md
