import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import Header from './Header.example'
import HeaderMD from './Header.md'

const One = () => (<CodeBlock md={BasicMD}><Basic /></CodeBlock>)
const Two = () => (<CodeBlock md={HeaderMD}><Header /></CodeBlock>)

export default {
    One,
    Two
}