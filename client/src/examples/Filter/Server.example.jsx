import React, { useState } from 'react'
import Table, { Th, Sorter, Filter } from 'designare-table'

const serverData = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.8, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: 0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: 0.09 }
]

function fakeFetch(filters) {
    const url = '?' + filters.map(
        f => `k=${f.dataKey}&op=${f.operator}&v=${f.filterValue}`
    ).join('&')

    console.log(`url`, url) // example of getting url

    return new Promise(resolve => {
        setTimeout(() => {
            const { filterValue, dataKey } = filters[0]
            const result = serverData.filter(
                d => !filterValue || d[dataKey].toLowerCase().indexOf(filterValue) >= 0
            )
            resolve(result)
        }, 1000)
    })
}

export default function () {
    const [data, setData] = useState(serverData)
    const [filters, setFilters] = useState([])
    const [loading, setLoading] = useState(false)

    return (
        <Table
            loading={loading}
            filters={filters}
            onChangeFilters={nextFilters => {
                setFilters(nextFilters)
                setLoading(true)
                fakeFetch(nextFilters).then(result => {
                    setData(result)
                    setLoading(false)
                })
            }}
            columns={[
                {
                    Header: (
                        <Th>
                            COMPANY
                            <Sorter />
                            <Filter
                                operator='contains' // user defined prop
                            >
                                {
                                    ({ filterValue = '', trigger }) => (
                                        <div style={{ fontSize: 'small' }}>
                                            <div style={{ padding: 10, borderBottom: '1px dashed rgba(0,0,0,.12)' }}>
                                                <input value={filterValue} onChange={evt => {
                                                    const value = evt.target.value
                                                    value ? trigger(value) : trigger()
                                                }}
                                                />
                                            </div>
                                            <div style={{ padding: '0 10px', height: 28, textAlign: 'right', color: '#bfbfbf' }}>
                                                <span
                                                    role='button'
                                                    style={{ lineHeight: '28px' }}
                                                    onClick={evt => trigger(/* pass undefined to cancel filter */)}
                                                >
                                                    Reset
                                                    </span>
                                            </div>
                                        </div>
                                    )
                                }
                            </Filter>
                        </Th>
                    ),
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
                    Header: 'CHG %',
                    dataKey: 'chgp'
                }
            ]}
            data={data}
        />
    )
}