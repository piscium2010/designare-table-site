const md = `import React from 'react'
import Table, { Thead, Tbody } from 'designare-table'

const one = {
    'exg': 'NASDAQ',
    'sec': 'Consumer Services',
    'instry': 'Catalog',
    '1YT': '\$2,250.00',
    'sv': '5,123,142',
    '50DAvg': '2,984,212',
    'Prev': '\$1,762.17',
    'MC': '880,873,538,392',
    'PE': '73.89',
    'FPE1.': '74.66822033898305',
    'EPS': '\$24.10',
    'AD': 'N/A',
    'Ex': 'N/A',
    'Dividend': 'N/A',
    'CYield': '0%'
}

const data = (function () {
    const r = []
    for (let i = 0; i < 5; i++) {
        r.push(one)
    }
    return r
})()

export default function () {
    return (
        <div>
            <Table
                style={{ height: 300 }}
                columns={[
                    { Header: 'Exchange', dataKey: 'exg' },
                    { Header: 'Sector', dataKey: 'sec', width: 200, fixed: 'left' },
                    { Header: 'Industry', dataKey: 'instry', fixed: 'right' },
                    { Header: '1 Year Target', dataKey: '1YT', fixed: 'left' },
                    { Header: 'Share Volume', dataKey: 'sv' },
                    { Header: '50 Day Average Vol.', dataKey: '50DAvg' },
                    { Header: 'Previous Close', dataKey: 'Prev' },
                    { Header: 'Market Cap', dataKey: 'MC' },
                    { Header: 'P/E Ratio', dataKey: 'PE', fixed: 'right' },
                    { Header: 'Forward P/E 1 Yr', dataKey: 'FPE1.' },
                    { Header: 'Earnings Per Share', dataKey: 'EPS' },
                    { Header: 'Annualized Dividend', dataKey: 'AD' },
                    { Header: 'Ex Dividend Date', dataKey: 'Ex' },
                    { Header: 'Dividend Pay Date', dataKey: 'Dividend' },
                    { Header: 'Current Yield', dataKey: 'CYield' }
                ]}
                data={data}
            >
                <Thead tr={({ cells }) => <tr style={{ height: 80 }}>{cells}</tr>} />
                <Tbody />
            </Table>
        </div>
    )
}`
export default md
