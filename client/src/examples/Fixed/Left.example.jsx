import React from 'react'
import Table, { Th, Sorter } from 'designare-table'

const one = {
    'exg': 'NASDAQ-GS',
    'sec': 'Consumer Services',
    'instry': 'Catalog/Specialty Distribution',
    '1YT': '$2,250.00',
    'THL': '$1,788.34/$1,760.27',
    'sv': '5,123,142',
    '50DAvg': '2,984,212',
    'Prev': '$1,762.17',
    '52HL': '$2,035.80/$1,307.00',
    'MC': '880,873,538,392',
    'PE': '73.89',
    'FPE1.': '74.66822033898305',
    'EPS': '$24.10',
    'AD': 'N/A',
    'Ex': 'N/A',
    'Dividend': 'N/A',
    'CYield': '0%',
    'Beta': '1.42'
}

const data = (function () {
    const r = []
    for (let i = 0; i < 20; i++) {
        r.push(one)
    }
    return r
})()

export default function () {
    return (
        <Table
            style={{ height: 228 }}
            columns={[
                { Header: 'Exchange', dataKey: 'exg' },
                { Header: 'Sector', dataKey: 'sec' },
                { Header: 'Industry', dataKey: 'instry' },
                { Header: '1 Year Target', dataKey: '1YT' },
                { Header: 'Todays High/Low', dataKey: 'THL' },
                { Header: 'Share Volume', dataKey: 'sv' },
                { Header: '50 Day Average Vol.', dataKey: '50DAvg' },
                { Header: 'Previous Close', dataKey: 'Prev' },
                { Header: '52 Week High/Low', dataKey: '52HL' },
                { Header: 'Market Cap', dataKey: 'MC' },
                { Header: 'P/E Ratio', dataKey: 'PE' },
                { Header: 'Forward P/E 1 Yr.', dataKey: 'FPE1.' },
                { Header: 'Earnings Per Share(EPS)', dataKey: 'EPS' },
                { Header: 'Annualized Dividend', dataKey: 'AD' },
                { Header: 'Ex Dividend Date', dataKey: 'Ex' },
                { Header: 'Dividend Pay Date', dataKey: 'Dividend' },
                { Header: 'Current Yield', dataKey: 'CYield' },
                { Header: 'Beta', dataKey: 'Beta' }
            ]}
            data={data}
        />
    )
}