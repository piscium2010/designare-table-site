import React, { useState } from 'react'
import Table, { Header } from 'designare'
import { data } from './data'

export default function Basic(props) {
    const [a, b] = useState('a')
    console.log(`table`, data)
    return (
        <div>
            <Table
                columns={[
                    {
                        Header: 'Name',
                        dataKey: 'name'
                    },
                    {
                        Header: 'PREV.CLOSE',
                        dataKey: 'prev_close'
                    },
                    {
                        Header: '-/+',
                        dataKey: 'percent'
                    },
                    {
                        Header: 'Time',
                        dataKey: 'time',
                    },
                    {
                        Header: '3 MO.',
                        dataKey: 'three_month',
                    },
                    {
                        Header: 'YTD',
                        dataKey: 'ytd',
                    }
                ]}
                data={data}
            />
        </div>
    )
}