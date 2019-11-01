const md = `import React, { useState } from 'react'
import Table, { DraggableTh } from 'designare-table'

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

export default function () {
    const [columns, setColumns] = useState([
        {
            Header: <DraggableTh>COMPANY</DraggableTh>,
            dataKey: 'name'
        },
        {
            Header: <DraggableTh>LAST</DraggableTh>,
            children: [
                {
                    Header: <DraggableTh>F</DraggableTh>,
                    dataKey: 'last'
                },
                {
                    Header: <DraggableTh>L</DraggableTh>,
                    dataKey: 'last'
                }
            ]
        },
        {
            Header: <DraggableTh>CHG</DraggableTh>,
            dataKey: 'chg'
        },
        {
            Header: <DraggableTh>CHG %</DraggableTh>,
            dataKey: 'chgp'
        }
    ])
    return (
        <div>
            <Table
                columns={columns}
                data={data}
                onChangeColumns={columns => {
                    console.log(\`change\`,columns)
                    setColumns(columns)
                }}
            />
            {/* <Table
                columns={[
                    {
                        Header: <DraggableTh>LAST</DraggableTh>,
                        children: [
                            {
                                Header: <DraggableTh>F</DraggableTh>,
                                dataKey: 'last'
                            },
                            {
                                Header: <DraggableTh>L</DraggableTh>,
                                dataKey: 'last'
                            }
                        ]
                    },
                    {
                        Header: <DraggableTh>COMPANY</DraggableTh>,
                        dataKey: 'name'
                    },
                    {
                        Header: <DraggableTh>CHG</DraggableTh>,
                        dataKey: 'chg'
                    },
                    {
                        Header: <DraggableTh>CHG %</DraggableTh>,
                        dataKey: 'chgp'
                    }
                ]}
                data={data}
                onChangeColumns={columns => {
                    console.log(\`change\`,columns)
                    setColumns(columns)
                }}
            /> */}

        </div>
    )
}`
export default md
