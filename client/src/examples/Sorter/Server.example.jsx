import React, { useState } from 'react'
import Table, { Th, Sorter } from 'designare-table'

const serverData = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: 0.04 },
    { name: 'Walt Disney Co.', last: 130.8, chg: 1.10, chgp: 0.85 },
    { name: 'Walmart Inc.', last: 119.4, chg: -0.11, chgp: 0.09 }
]

const byNumber = (a, b) => {
    return a - b
}

const byStr = (a, b) => {
    if (a > b) return 1
    if (a == b) return 0
    if (a < b) return -1
}

const fakeFetch = (dataKey, direction) => {
    const by = (a, b) => dataKey === 'name'
        ? byStr(a[dataKey], b[dataKey])
        : byNumber(a[dataKey], b[dataKey])

    return new Promise(resolve => {
        let result = Array.from(serverData)
        result = direction === 'default'
            ? result
            : direction === 'asc'
                ? result.sort(by)
                : result.sort(by).reverse()
        resolve(result)
    })
}

export default function () {
    const [data, setData] = useState(serverData)
    const [sorter, setSorter] = useState()

    return (
        <Table
            columns={[
                {
                    Header: <Th><span>COMPANY</span><Sorter by='server' /></Th>,
                    dataKey: 'name',
                    width: '*'
                },
                {
                    Header: <Th><span>LAST</span><Sorter by='server' /></Th>,
                    dataKey: 'last'
                },
                {
                    Header: <Th><span>CHG</span><Sorter by='server' /></Th>,
                    dataKey: 'chg'
                },
                {
                    Header: <Th><span>CHG %</span><Sorter by='server' /></Th>,
                    dataKey: 'chgp'
                }
            ]}
            data={data}
            sorter={sorter}
            onChangeSorter={({ dataKey, direction, by }) => {
                if (by === 'server') {
                    fakeFetch(dataKey, direction).then(data => {
                        setData(data)
                        setSorter({ dataKey, direction })
                    })
                }
            }}
        />
    )
}