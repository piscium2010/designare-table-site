import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Cell from './Cell.example'
import CellMD from './Cell.md'
import Style from './Style.example'
import StyleMD from './Style.md'

const Two = () => (<CodeBlock md={CellMD}><Cell /></CodeBlock>)
const Three = () => (<CodeBlock md={StyleMD}><Style /></CodeBlock>)

export default {
    Two,
    Three
}