const md = `import React from 'react'
import Table, { Thead, Tbody } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

const Header = () => (
    <div style={{ padding: '0 16px', borderBottom: '1px solid rgba(0,0,0,.12)' }}>
        <h3>Dow Jones</h3>
    </div>
)

const Footer = () => (
    <div style={{ padding: '6px 16px', fontSize: 12 }}>Powered by designare</div>
)

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
                    dataKey: 'chgp'
                }
            ]}
            data={data}
        >
            <Header/>
            <Thead tr={({ cells }) => <tr style={{ height: 50 }}>{cells}</tr>} />
            <Tbody />
            <Footer/>
        </Table>
    )
}`
export default md
