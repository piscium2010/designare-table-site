import React, { useState } from 'react'
import Table, { Th, Td, Sorter, Tbody } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

export default function () {
    const render = ( direction, directions, defaultColor, activeColor ) => {
            const icons = directions.filter(d => d !== 'default')
            return (
                <React.Fragment>
                    {
                        icons.length === 2
                            ? <React.Fragment>
                                <div className={`designare-table-sorter ${direction === 'asc' ? 'active' : 'default'}`} style={{  color: direction === 'asc' ? activeColor : defaultColor }}>
                                    <span>t</span>
                                </div>
                                <div className={`designare-table-sorter ${direction === 'des' ? 'active' : 'default'}`} style={{  color: direction === 'des' ? activeColor : defaultColor }}>
                                    <span>t</span>
                                </div>
                            </React.Fragment>
                            :
                            <div className={`designare-table-sorter ${direction === icons[0] ? 'active' : 'default'}`} style={{
                                
                                top: '50%', transform: icons[0] === 'asc' ? 'translateY(-30%)' : 'translateY(-55%)'
                            }}
                            >
                                {icons[0] === 'asc' ? <span>t</span> : icons[0] === 'des' ? <span>t</span> : null}
                            </div>
                    }
                </React.Fragment>
            )
        }
    return (
        <Table
            columns={[
                {
                    // Header: <Th><span style={{display:'table-cell'}}>COMPANY</span><Sorter/></Th>,
                    Header: 'tst',
                    dataKey:'name',
                    width: '*'
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
        >
            <Tbody tr={
                ({ rowIndex }) => (
                    <tr>
                        <Tbody.Row />
                    </tr>
                )
            }
            />
        </Table>
    )
}