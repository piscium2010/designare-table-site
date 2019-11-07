const md = `import React from 'react'
import Table, { Th, Td } from 'designare-table'

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

const data = (
    function (result = []) {
        for (let i = 0; i < 5; i++) result.push(one)
        return result
    }
)()

export default function () {
    const style = { borderRight: '1px solid rgba(0, 0, 0, 0.12)' }
    const header = str => <Th style={style}>{str}</Th>
    const cell = ({value}) => <Td style={style}>{value}</Td>
    
    return (
        <div>
            <Table
                columns={[
                    { Header: header('Exchange'), Cell: cell, dataKey: 'exg' },
                    { Header: header('Sector'), Cell: cell, dataKey: 'sec', width: 200 },
                    { Header: header('Industry'), Cell: cell, dataKey: 'instry' },
                    { Header: header('1 Year Target'), Cell: cell, dataKey: '1YT' },
                    { Header: header('Share Volume'), Cell: cell, dataKey: 'sv' },
                    { Header: header('50 Day Average Vol.'), Cell: cell, dataKey: '50DAvg' },
                    { Header: header('Previous Close'), Cell: cell, dataKey: 'Prev' },
                    { Header: header('Market Cap'), Cell: cell, dataKey: 'MC' },
                    { Header: header('P/E Ratio'), Cell: cell, dataKey: 'PE' },
                    { Header: header('Forward P/E 1 Yr'), Cell: cell, dataKey: 'FPE1.' },
                    { Header: header('Earnings Per Share'), Cell: cell, dataKey: 'EPS' },
                    { Header: header('Annualized Dividend'), Cell: cell, dataKey: 'AD' },
                    { Header: header('Ex Dividend Date'), Cell: cell, dataKey: 'Ex' },
                    { Header: header('Dividend Pay Date'), Cell: cell, dataKey: 'Dividend' },
                    { Header: header('Current Yield'), Cell: cell, dataKey: 'CYield' }
                ]}
                data={data}
                resizable
            >
            </Table>
        </div>
    )
}`
export default md
