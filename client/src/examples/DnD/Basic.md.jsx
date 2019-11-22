const md = `import React, { useState } from 'react'
import Table, { DragTh, Th } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

const style = { cursor: 'move' }

export default function () {
    const [columns, setColumns] = useState([
        {
            Header: <DragTh style={style}>COMPANY</DragTh>,
            dataKey: 'name'
        },
        {
            Header: <DragTh style={style}>LAST</DragTh>,
            dataKey: 'last'
        },
        {
            Header: <DragTh style={style}>CHG</DragTh>,
            dataKey: 'chg'
        },
        {
            Header: <DragTh style={style}>CHG %</DragTh>,
            dataKey: 'chgp'
        }
    ])
    return (
        <Table
            data={data}
            columns={columns}
            onChangeColumns={columns => {
                setColumns(columns)
            }}
        />
    )
}`
export default md
