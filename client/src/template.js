import React from 'react'

export default function Basic(props) {

}


const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: '1.75' },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: '0.93' },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: '0.85' },
    { name: `McDonald's Corp.`, last: 208.30, chg: 1.08, chgp: '0.52' },
    { name: 'Goldman Sachs Group Inc.', last: 207.42, chg: 0.96, chgp: '0.46' }
]

const d = [
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
    { name: 'Pfizer Inc.', last: 36.46, chg: 0.12, chgp: 0.33 },

    { name: 'Chevron Corp.', last: 115.35, chg: 0.24, chgp: 0.21 },
    { name: 'Verizon Communications Inc.', last: 60.41, chg: 0.12, chgp: 0.20 },
    { name: 'Visa Inc. Cl A', last: 177.94, chg: 0.07, chgp: 0.04 },
    { name: 'Procter & Gamble Co.', last: 116.63, chg: -0.15, chgp: -0.13 },
    { name: 'Exxon Mobil Corp.', last: 68.14, chg: -0.09, chgp: -0.13 },

    { name: 'Goldman Sachs Group Inc.', last: 206.46, chg: -0.96, chgp: -0.46 },
    { name: 'Microsoft Corp.', last: 139.69, chg: -0.72, chgp: -0.51 },
    { name: 'Merck & Co. Inc.', last: 83.80, chg: -0.65, chgp: -0.77 },
    { name: 'Boeing Co.', last: 369.06, chg: -3.37, chgp: -0.90 },
    { name: 'Intel Corp.', last: 51.86, chg: -0.59, chgp: -1.12 },
    { name: 'Travelers Cos. Inc.', last: 140.48, chg: -2.09, chgp: -1.47 },
    { name: 'International Business Machines Corp.', last: 134.26, chg: -7.85, chgp: -5.52 }
]

const d = [
    { name: 'Adaptimmune Ther Ads', last: 0.97, chg: -0.03, chgp: -3.09, v: '1,076,90045', hight: -91.25, low: 2.00, time: '10/18/19' },
    { name: 'Aileron Therapeutics Inc', last: 0.42, chg: 0.01, chgp: 1.28, v: '530,10020', hight: -83.88, low: 4.72, time: '10/18/19' },
    { name: 'Andersons Inc', last: 17.84, chg: -0.54, chgp: -2.94, v: '209,40043', hight: -53.33, low: 0.17, time: '10/18/19' },
    { name: 'Asia Pacific Wire & Cable', last: 1.38, chg: -0.04, chgp: -2.9, v: '34,10022', hight: -43.44, low: 3.76, time: '10/18/19' },
    { name: 'Avalon Globocare', last: 1.59, chg: -0.01, chgp: -0.62, v: '19,00022', hight: -88.22, low: 0.63, time: '10/18/19' }
]


const e = [{
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
}]

const e = [
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
]

