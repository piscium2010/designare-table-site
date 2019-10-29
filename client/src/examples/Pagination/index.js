import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import DefaultE from './Default.example'
import DefaultMD from './Default.md'
import Size from './Size.example'
import SizeMD from './Size.md'
import Server from './Server.example'
import ServerMD from './Server.md'

const One = () => (<CodeBlock md={DefaultMD}><DefaultE /></CodeBlock>)
const Two = () => (<CodeBlock md={SizeMD}><Size /></CodeBlock>)
const Three = () => (<CodeBlock md={ServerMD}><Server /></CodeBlock>)

export default {
    One,
    Two,
    Three
}