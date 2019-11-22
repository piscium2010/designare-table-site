import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Cell from './Cell.example'
import CellMD from './Cell.md'

const Two = () => (<CodeBlock md={CellMD}><Cell /></CodeBlock>)

export default Two