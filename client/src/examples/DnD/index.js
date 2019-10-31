import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import Row from './Row.example'
import RowMD from './Row.md'
import Style from './Style.example'
import StyleMD from './Style.md'

const One = () => (<CodeBlock md={BasicMD}><Basic /></CodeBlock>)
const Two = () => (<CodeBlock md={RowMD}><Row /></CodeBlock>)

export default {
    One,
    Two
}