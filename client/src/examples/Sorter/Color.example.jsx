import React from 'react'
import Table, { Th, Sorter } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: '1.75%' },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: '0.93%' },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: '0.85%' },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: '-0.04%' },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: '-0.09%' }
]

export default function () {
    const colors = { activeColor: '#9dd411', defaultColor: '#bfbfbf' }
    return (
        <Table
            columns={[
                {
                    Header: <Th><Sorter {...colors}/><span>COMPANY</span></Th>,
                    dataKey: 'name',
                    width: '*'
                },
                {
                    Header: <Th><Sorter {...colors}/><span>LAST</span></Th>,
                    dataKey: 'last'
                },
                {
                    Header: <Th><Sorter {...colors}/><span>CHG</span></Th>,
                    dataKey: 'chg'
                },
                {
                    Header: <Th><Sorter {...colors}/><span>CHG %</span></Th>,
                    dataKey: 'chgp'
                }
            ]}
            defaultSorter={{
                dataKey: 'name',
                direction: 'asc'
            }}
            data={data}
        />
    )
}