const md = `import React from 'react'
import Table, { Th, Sorter } from 'designare-table'

const ArrowUp = () => (
    <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        style={{ pointerEvents: 'none', width: '100%' }}
    >
        <path fill="currentColor" d="M4.465 263.536l7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L207 92.113V468c0 6.627 5.373 12 12 12h10c6.627 0 12-5.373 12-12V92.113l178.494 178.493c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-211.05-211.05c-4.686-4.686-12.284-4.686-16.971 0L4.465 246.566c-4.687 4.686-4.687 12.284 0 16.97z"></path>
    </svg>
)

const ArrowDown = () => (
    <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        style={{ pointerEvents: 'none', width: '100%' }}
    >
        <path fill="currentColor" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"></path>
    </svg>
)

const data = [
    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

const headerStyle = { textAlign: 'left' }

const render = ({ direction, defaultColor, activeColor }) => {
    const color = direction === 'default' ? 'white' : activeColor
    return (
        <div className={\`designare-transition\`}
            style={{
                display:'flex',
                height: 'inherit',
                position: 'absolute',
                top: 0,
                left: 4,
                width: 10,
                color
            }}
            onMouseOver={evt => evt.currentTarget.style.color = activeColor}
            onMouseLeave={evt => evt.currentTarget.style.color = color}
        >
            {direction === 'asc' && <ArrowUp />}
            {direction === 'des' && <ArrowDown />}
            {direction === 'default' && <ArrowUp />}
        </div>
    )
}

export default function () {
    return (
        <Table
            columns={[
                {
                    Header: <Th style={headerStyle}><span>COMPANY</span><Sorter render={render} /></Th>,
                    dataKey: 'name'
                },
                {
                    Header: <Th style={headerStyle}><span>LAST</span><Sorter render={render} /></Th>,
                    dataKey: 'last'
                },
                {
                    Header: <Th style={headerStyle}><span>CHG</span><Sorter render={render} /></Th>,
                    dataKey: 'chg'
                },
                {
                    Header: <Th style={headerStyle}><span>CHG %</span><Sorter render={render} /></Th>,
                    dataKey: 'chgp'
                }
            ]}
            defaultSorter={{
                dataKey: 'name',
                direction: 'asc'
            }}
            data={data}
        />
    )
}`
export default md
