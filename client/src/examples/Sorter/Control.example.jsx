import React, { useState } from 'react'
import Table, { Th, Sorter } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: '135.7', chg: 2.33, chgp: '1.75%' },
    { name: 'Cisco Systems Inc.', last: '46.79', chg: 0.43, chgp: '0.93%' },
    { name: 'Walt Disney Co.', last: '130.86', chg: 1.10, chgp: '0.85%' },
    { name: 'Coca-Cola Co.', last: '53.49', chg: -0.02, chgp: '-0.04%' },
    { name: 'Walmart Inc.', last: '119.42', chg: -0.11, chgp: '-0.09%' }
]

export default function () {
    const custom = (a, b) => {
        const left = a.replace('%', '') / 1
        const right = b.replace('%', '') / 1
        return left - right
    }
    const [sorter, setSorter] = useState({ dataKey: 'name', direction: 'asc' })
    return (
        <Table
            columns={[
                {
                    Header: <Th>COMPANY<Sorter directions={['asc']} /></Th>,
                    dataKey: 'name',
                    width: '*'
                },
                {
                    Header: <Th>LAST<Sorter directions={['des']} by='number' /></Th>,
                    dataKey: 'last'
                },
                {
                    Header: <Th>CHG<Sorter directions={['asc', 'des']} /></Th>,
                    dataKey: 'chg'
                },
                {
                    Header: <Th>CHG %<Sorter directions={['asc', 'des']} by={custom} /></Th>,
                    dataKey: 'chgp'
                }
            ]}
            defaultSorter={{
                dataKey: 'last',
                direction: 'des'
            }}
            sorter={sorter}
            onChangeSorter={({ dataKey, direction }) => {
                setSorter({ dataKey, direction })
            }}
            data={data}
        />
    )
}