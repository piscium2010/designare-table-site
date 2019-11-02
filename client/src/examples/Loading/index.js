import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import Style from './Style.example'
import StyleMD from './Style.md'


const One = () => (<CodeBlock md={BasicMD}><Basic /></CodeBlock>)
const Two = () => (<CodeBlock md={StyleMD}><Style /></CodeBlock>)

export default {
    One,
    Two
}