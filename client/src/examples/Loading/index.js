import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import Style from './Style.example'
import StyleMD from './Style.md'
import Custom from './Custom.example'
import CustomMD from './Custom.md'


const One = () => (<CodeBlock md={BasicMD}><Basic /></CodeBlock>)
const Two = () => (<CodeBlock md={StyleMD}><Style /></CodeBlock>)
const Three = () => (<CodeBlock md={CustomMD}><Custom /></CodeBlock>)

export default {
    One,
    Two,
    Three
}