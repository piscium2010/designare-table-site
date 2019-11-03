const md = `import React from 'react'
import Table, { Th, Filter } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.8, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: 0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: 0.09 }
]

export default function () {
    const by = ({ dataKey, row, filterValue }) => row[dataKey].toLowerCase().indexOf(filterValue) > -1
    
    const companyFilter = ({ filterValue = '', trigger }) => (
        <div>
            <div style={{ padding: 10 }}>
                <input
                    value={filterValue}
                    onChange={evt =>
                        trigger(evt.target.value || undefined)
                    }
                />
            </div>
            <div
                style={{
                    padding: '0 10px',
                    textAlign: 'right',
                    color: '#bfbfbf',
                    borderTop: '1px dashed rgba(0,0,0,.12)'
                }}
            >
                <span
                    role='button'
                    style={{ lineHeight: '28px', fontSize: 'small' }}
                    onClick={evt => trigger(/* pass undefined to cancel filter */)}
                >
                    Reset
                </span>
            </div>
        </div>
    )

    return (
        <Table
            defaultFilters={
                [{ dataKey: 'name', filterValue: 'c' }]
            }
            columns={[
                {
                    Header: (
                        <Th>
                            COMPANY
                            <Filter by={by}>{companyFilter}</Filter>
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
}`
export default md
