import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import Cell from './Cell.example'
import CellMD from './Cell.md'
import Style from './Style.example'
import StyleMD from './Style.md'

const One = () => (<CodeBlock md={BasicMD}><Basic /></CodeBlock>)
const Two = () => (<CodeBlock md={CellMD}><Cell /></CodeBlock>)
const Three = () => (<CodeBlock md={StyleMD}><Style /></CodeBlock>)

export default {
    One,
    Two,
    Three
}