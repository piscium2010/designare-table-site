const md = `import React from 'react'
import Table, { Th, Filter } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.8, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: 0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: 0.09 }
]

const Label = props => <label {...props} style={{ cursor: 'pointer', marginLeft: 5 }}>{props.children}</label>

export default function () {
    const by = ({ dataKey, row, filterValue }) =>
        filterValue == 'positive'
            ? row[dataKey] > 0
            : row[dataKey] < 0

    const chgFilter = ({ filterValue, trigger }) => (
        <div style={{ fontSize: 'small' }}>
            <div style={{ padding: 10 }}>
                <input
                    id='p'
                    checked={filterValue === 'positive'}
                    type='radio'
                    name='chg'
                    onChange={evt => trigger('positive')}
                />
                <Label htmlFor='p'>Positive</Label>
                <br />
                <input
                    id='n'
                    checked={filterValue === 'negative'}
                    type='radio'
                    name='chg'
                    onChange={evt => trigger('negative')}
                />
                <Label htmlFor='n'>Negtive</Label>
            </div>
            <div
                style={{
                    padding: '6px 10px',
                    textAlign: 'right',
                    color: '#bfbfbf',
                    borderTop: '1px dashed rgba(0,0,0,.12)'
                }}
            >
                <span
                    role='button'
                    onClick={() => trigger(/* pass undefined to cancel filter */)}
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
                    Header: 'COMPANY',
                    dataKey: 'name'
                },
                {
                    Header: 'LAST',
                    dataKey: 'last'
                },
                {
                    Header: (
                        <Th>
                            CHG
                            <Filter by={by}>{chgFilter}</Filter>
                        </Th>
                    ),
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
