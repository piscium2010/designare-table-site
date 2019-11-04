import React, { useState } from 'react'
import Table, { Thead, Tbody, Td, Icons } from 'designare-table'

const style = { display: 'flex', alignItems: 'center', userSelect: 'none', cursor: 'pointer' }
const one = {
    'exg': 'NASDAQ',
    'sec': 'Consumer Services',
    'instry': 'Catalog',
    '1YT': '$2,250.00',
    'sv': '5,123,142',
    '50DAvg': '2,984,212',
    'Prev': '$1,762.17',
    'MC': '880,873,538,392',
    'PE': '73.89',
    'FPE1.': '74.66822033898305',
    'EPS': '$24.10',
    'AD': 'N/A',
    'Ex': 'N/A',
    'Dividend': 'N/A',
    'CYield': '0%',
    'desc': 'Lorem ipsum dolor sit amet.'
}
const data = (
    function (result = []) {
        for (let i = 0; i < 14; i++) {
            result.push(one)
        }
        return result
    }
)()

export default function () {
    const [keys, setKeys] = useState(new Set())
    const onToggle = index => {
        keys.has(index) ? keys.delete(index) : keys.add(index)
        setKeys(new Set(keys))
    }

    const headerTr = ({ cells }) => <tr style={{ height: 80 }}>{cells}</tr>

    const bodyTr = ({ row, rowIndex, cells, getColumns, fixed }) => {
        const Desc = () => {
            const cols = getColumns()
            const leftSpan = cols.filter(c => c.fixed == 'left').length
            const rightSpan = cols.filter(c => c.fixed == 'right').length
            const span = cols.filter(c => !c.fixed).length
            let element
            switch (fixed) {
                case 'left':
                    element = <td colSpan={leftSpan}>Left Desc</td>
                    break
                case 'right':
                    element = [
                        <td key={0} colSpan={leftSpan + span} style={{ zIndex: 0 }}>&nbsp;</td>,
                        <td key={1} colSpan={rightSpan}>Right Desc</td>,
                    ]
                    break
                default:
                    element = [
                        <td key={0} colSpan={leftSpan}>&nbsp;</td>,
                        <td key={1} colSpan={span}>{row['desc']}</td>,
                        <td key={2} colSpan={rightSpan}>&nbsp;</td>
                    ]
            }
            return <tr>{element}</tr>
        }
        return [<tr key={0}>{cells}</tr>, keys.has(rowIndex) ? <Desc key={1} /> : null]
    }

    const expandableCell = ({ rowIndex }) => {
        const collapsed = keys.has(rowIndex)
        return (
            <Td>
                <div
                    className='designare-transition'
                    style={{ ...style, color: collapsed ? '#1890ff' : 'gray' }}
                    onClick={evt => onToggle(rowIndex)}>
                    {
                        collapsed
                            ? <Icons.MinusSquare />
                            : <Icons.PlusSquare />
                    }
                </div>
            </Td>
        )
    }

    return (
        <div>
            <Table
                style={{ height: 280 }}
                columns={[
                    {
                        Header: '',
                        Cell: expandableCell,
                        fixed: 'left'
                    },
                    { Header: 'Exchange', dataKey: 'exg' },
                    { Header: 'Sector', dataKey: 'sec', width: 200, fixed: 'left' },
                    { Header: 'Industry', dataKey: 'instry' },
                    { Header: '1 Year Target', dataKey: '1YT' },
                    { Header: 'Share Volume', dataKey: 'sv' },
                    { Header: '50 Day Average Vol.', dataKey: '50DAvg' },
                    { Header: 'Previous Close', dataKey: 'Prev' },
                    { Header: 'Market Cap', dataKey: 'MC', fixed: 'right' },
                    { Header: 'P/E Ratio', dataKey: 'PE', fixed: 'right' },
                    { Header: 'Forward P/E 1 Yr', dataKey: 'FPE1.' },
                    { Header: 'Earnings Per Share', dataKey: 'EPS' },
                    { Header: 'Annualized Dividend', dataKey: 'AD' },
                    { Header: 'Ex Dividend Date', dataKey: 'Ex' },
                    { Header: 'Dividend Pay Date', dataKey: 'Dividend' },
                    { Header: 'Current Yield', dataKey: 'CYield' }
                ]}
                data={data}
            >
                <Thead tr={headerTr} />
                <Tbody tr={bodyTr} />
            </Table>
        </div>
    )
}