const md = `import React, { useState, Fragment } from 'react'
import Table, { Td, Thead, Tbody } from 'designare-table'
import VForm, { v } from '@piscium2010/v-form'


const originData = [
    { id: 0, name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },
    { id: 1, name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },
    { id: 2, name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: 0.85 },
    { id: 3, name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: -0.04 },
    { id: 4, name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: -0.09 }
]

const rules = {
    'name': v.expect('required'),
    'last': v.expect('required').expect('should be number', ({last})=> !isNaN(last)),
    'chg': v.expect('required').expect('should be number', ({chg})=> !isNaN(chg)),
    'chgp': v.expect('required').expect('should be number', ({chgp})=> !isNaN(chgp))
}

export default function () {
    const [data, setData] = useState(originData)
    const [isEditing, setEditing] = useState(false)
    const [selection, setSelection] = useState([])
    const [editingRows] = useState(new Map())
    const isEditingMode = row => isEditing && selection.includes(row.id)

    const onToggle = (evt, id) => {
        if (isEditing) return
        const s = new Set(selection)
        evt.target.checked ? s.add(id) : s.delete(id)
        setSelection([...s])
    }

    const onEdit = () => {
        editingRows.clear()
        selection.forEach(id => {
            const one = data.find(i => i.id === id)
            editingRows.set(id, { ...one })
        })
        setEditing(true)
    }

    const onSave = () => {
        let hasError = false
        editingRows.forEach(r => hasError = r.err ? true : hasError)
        if (hasError) return

        editingRows.forEach((r, id) => {
            const one = data.find(i => i.id === id)
            Object.assign(one, r)
        })
        setEditing(false)
        setData(Array.from(data))
    }

    const onCancel = () => setEditing(false)

    // Validation Field - capable of showing error message according to validation rules
    const Field = VForm.fieldFactory(({ row, dataKey, v, message: errMsg }) => {
        const value = row[dataKey] + ''
        const [state, setState] = useState({ txt: value, size: value.length })
        const editingRow = editingRows.get(row.id)

        const onChange = newValue => {
            const result = v.test({ [dataKey]: newValue })
            result.pass ? editingRow[dataKey] = newValue : undefined
            result.pass ? editingRow['err'] = false : editingRow['err'] = true
            setState({ ...state, txt: newValue })
        }

        return (
            <Fragment>
                <input
                    value={state.txt}
                    onChange={evt => onChange(evt.target.value)}
                    style={{ fontSize: 'inherit' }}
                    size={state.size}
                />
                {
                    errMsg &&
                    <div style={{ color: '#b51a28', fontSize: 'small', position: 'absolute' }}>{errMsg}</div>
                }
            </Fragment>
        )
    })

    const EditableCell = ({ value, row, dataKey }) => (
        <Td>
            {
                isEditingMode(row)
                    ? <Field name={dataKey} row={row} dataKey={dataKey} />
                    : value
            }
        </Td>
    )

    return (
        <div>
            {isEditing && <button onClick={onSave}>Save</button>}
            {isEditing && <button onClick={onCancel}>Cancel</button>}
            {!isEditing && <button onClick={onEdit} disabled={selection.length === 0}>Edit</button>}
            <Table
                columns={[
                    {
                        Header: '',
                        Cell: ({ row }) => (
                            <Td>
                                <input
                                    type='checkbox'
                                    style={{ cursor: isEditing ? 'not-allowed' : 'pointer' }}
                                    onChange={evt => onToggle(evt, row.id)}
                                    checked={selection.includes(row.id)}
                                />
                            </Td>
                        )
                    },
                    {
                        Header: 'COMPANY',
                        dataKey: 'name',
                        Cell: EditableCell
                    },
                    {
                        Header: 'Last',
                        dataKey: 'last',
                        Cell: EditableCell
                    },
                    {
                        Header: 'CHG',
                        dataKey: 'chg',
                        Cell: EditableCell
                    },
                    {
                        Header: 'CHG %',
                        dataKey: 'chgp',
                        Cell: EditableCell
                    }
                ]}
                data={data}
                rowHeight={50}
            >
                <Thead />
                <Tbody tr={
                    ({ row, cells }) => {
                        const validationOfRow = v.create(rules)
                        return (
                            isEditingMode(row)
                                ? <VForm validation={validationOfRow}><tr>{cells}</tr></VForm>
                                : <tr>{cells}</tr>
                        )
                    }}
                />
            </Table>
        </div>
    )
}`
export default md
