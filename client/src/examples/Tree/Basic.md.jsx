const md = `import React, { useState } from 'react'
import Table, { Td, Icons, Tree } from 'designare-table'

const style = { display: 'flex', alignItems: 'center', userSelect: 'none', cursor: 'pointer' }
const Button = props => <span role='button' style={{ lineHeight: '30px', marginRight: 10, fontSize: 'small' }} {...props}></span>
const treeData = [
    {
        name: 'AMERICAS', last: '26,827.64', chg: '57.44', chgp: '0.21',
        children: [
            {
                name: 'Key', last: '8,162.99', chg: '73.44', chgp: '0.91',
                children: [
                    { name: 'UnitedHealth Group Inc.', last: '43.67', chg: '6.68', chgp: '2.82' },
                    { name: 'Walgreens Boots Alliance Inc.', last: '55.94', chg: '1.28', chgp: '2.34' },
                ]
            },
            {
                name: 'Other', last: '1,550.14', chg: '14.66', chgp: '0.95',
                children: [
                    { name: 'Dow Inc.', last: '47.81', chg: '0.69', chgp: '1.46' },
                    { name: 'Caterpillar Inc.', last: '131.04', chg: '1.88', chgp: '1.46' },
                    { name: 'American Express Co.', last: '119.10', chg: '1.69', chgp: '1.44' },
                ]
            },
        ]
    },
    { name: 'STOXX Europe 50 Index', last: '3,237.42', chg: '4.95', chgp: '0.14' },
    { name: 'STOXX Europe 600 Index', last: '394.34', chg: '0.14', chgp: '0.04' }
]

export default function () {
    const [selection, setSelection] = useState([])
    const onToggle = index => {
        const s = new Set(selection)
        s.has(index) ? s.delete(index) : s.add(index)
        setSelection([...s])
    }

    const tree = Tree({
        'treeId': ({ row, index, parentKey }) => row.name
    })

    // flatten treeData into normal data
    const data = tree.flatten(treeData, selection)

    const expandableCell = ({ row }) => {
        const { treeId } = row // injected by tree.flatten
        const collapsed = selection.includes(treeId)
        return (
            <Td>
                {
                    row.children &&
                    <div
                        className='designare-transition'
                        style={{ ...style, color: collapsed ? '#1890ff' : 'gray' }}
                        onClick={evt => onToggle(treeId)}>
                        {
                            collapsed
                                ? <Icons.MinusSquare />
                                : <Icons.PlusSquare />
                        }
                    </div>
                }
            </Td>
        )
    }

    const companyCell = ({ value, row }) => {
        const { depth } = row // injected by tree.flatten
        return (
            <Td>
                <span style={{ marginLeft: 10 + 20 * depth }}>{value}</span>
            </Td>
        )
    }

    return (
        <div>
            <Button onClick={evt => setSelection(tree.getAllParentKeys(treeData))}>Expand All</Button>
            <Button onClick={evt => setSelection([])}>Close All</Button>
            <Table
                columns={[
                    {
                        Header: '',
                        Cell: expandableCell
                    },
                    {
                        Header: 'COMPANY',
                        dataKey: 'name',
                        Cell: companyCell,
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
            />
        </div>
    )
}
`
export default md
