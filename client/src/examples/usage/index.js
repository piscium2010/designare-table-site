import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import Cell from './Cell.example'
import CellMD from './Cell.md'

const One = props => (<CodeBlock md={BasicMD}><Basic /></CodeBlock>)
const Two = props => (<CodeBlock md={CellMD}><Cell /></CodeBlock>)

export default {
    One,
    Two
}