import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import DefaultE from './Default.example'
import DefaultMD from './Default.md'
import Size from './Size.example'
import SizeMD from './Size.md'
import Server from './Server.example'
import ServerMD from './Server.md'
import P from '../../components/P'

const One = () => (<CodeBlock md={DefaultMD}><DefaultE /></CodeBlock>)
const Two = () => (<CodeBlock md={SizeMD}><Size /><P zh='pageSizeOptions 最好不要超过三个。'/></CodeBlock>)
const Three = () => (<CodeBlock md={ServerMD}><Server /></CodeBlock>)

export default {
    One,
    Two,
    Three
}