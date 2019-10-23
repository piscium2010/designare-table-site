import React, { useState } from 'react'
import Table, { Th, Sorter, Filter } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.8, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: 0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: 0.09 }
]

export default function () {

    return (
        <Table
            columns={[
                {
                    Header: (
                        <Th>
                            COMPANY
                        <Sorter directions={['asc']} />
                            <Filter by={({ dataKey, row, filterValue }) => filterValue == 'positive' ? row[dataKey] > 0 : row[dataKey] < 0}>
                                {
                                    ({ trigger }) => null
                                }
                            </Filter>
                        </Th>
                    ),
                    dataKey: 'name',
                    width: '*'
                },
                {
                    Header: <Th>LAST<Sorter directions={['des']} /></Th>,
                    dataKey: 'last'
                },
                {
                    Header: (
                        <Th>
                            CHG
                            <Sorter directions={['asc', 'des']} />
                            <Filter by={({ dataKey, row, filterValue }) => filterValue == 'positive' ? row[dataKey] > 0 : row[dataKey] < 0}>
                                {
                                    ({ filterValue, trigger }) => {
                                        return (
                                            <div style={{fontSize:'small'}}>
                                                <div style={{ padding: '10px 10px', borderBottom:'1px dashed rgba(0,0,0,.12)' }}>
                                                    <input
                                                        id='p'
                                                        checked={filterValue === 'positive'}
                                                        type='radio'
                                                        name='chg'
                                                        value='positive'
                                                        onChange={evt => trigger(evt.target.value)}
                                                    />
                                                    <label for='p' style={{ cursor: 'pointer' }}>Positive</label>
                                                    <br />
                                                    <input
                                                        id='n'
                                                        checked={filterValue === 'negtive'}
                                                        type='radio'
                                                        name='chg'
                                                        value='negtive'
                                                        onChange={evt => trigger(evt.target.value)}
                                                    />
                                                    <label for='n' style={{ cursor: 'pointer' }}>Negative</label>
                                                </div>
                                                <div style={{  padding: '6px 10px', textAlign: 'right', color: '#bfbfbf' }}>
                                                    <span
                                                        role='button'
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={evt => trigger(/* pass undefined to cancel filter */)}
                                                    >
                                                        Reset
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    }
                                }
                            </Filter>
                        </Th>
                    ),
                    dataKey: 'chg'
                },
                {
                    Header: <Th>CHG%<Sorter directions={['asc', 'des']} /><Filter /></Th>,
                    dataKey: 'chgp'
                }
            ]}
            data={data}
        />
    )
}