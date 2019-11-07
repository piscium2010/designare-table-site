const md = `import React from 'react'
import Table, { Th, Filter, Sorter } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.8, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: 0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: 0.09 }
]

const Icon = () => (
    <svg style={{ width: 15 }} aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"></path>
    </svg>
)

const by = ({ dataKey, row, filterValue }) => row[dataKey].toLowerCase().indexOf(filterValue) >= 0

export default function () {
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
            columns={[
                {
                    Header: (
                        <Th>
                            COMPANY
                            <Sorter />
                            <Filter
                                style={{ width: 25 }}
                                render={() => <Icon />}
                                by={by}
                            >
                                {companyFilter}
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
            defaultSorter={{dataKey:'name',direction:'des'}}
            defaultFilters={[{dataKey:'name',filterValue:'c'}]}
            data={data}
        />
    )
}`
export default md
