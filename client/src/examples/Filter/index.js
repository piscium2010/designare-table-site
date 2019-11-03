import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import DefaultE from './Default.example'
import DefaultMD from './Default.md'
import Control from './Control.example'
import ControlMD from './Control.md'
import Server from './Server.example'
import ServerMD from './Server.md'
import Color from './Color.example'
import ColorMD from './Color.md'
import Style from './Style.example'
import StyleMD from './Style.md'
import P from '../../components/P'

const One = () => (<CodeBlock md={BasicMD}><Basic /><P zh='Filter组件内置了图标与下拉框，你只需专注于filter内容与逻辑的实现。' /></CodeBlock>)
const Two = () => (<CodeBlock md={DefaultMD}><DefaultE /></CodeBlock>)
const Three = () => (<CodeBlock md={ControlMD}><Control /></CodeBlock>)
const Four = () => (<CodeBlock md={ServerMD}><Server /><P zh='省略by，以回避前端过滤。' /></CodeBlock>)
const Five = () => (
    <CodeBlock md={ColorMD}><Color />
        <P
            zh="activeColor 和 defaultColor 可以传给Filter 也可以传给Table。 后者将同时作用于Sorter和Filter"
        />
    </CodeBlock>
)
const Six = () => (
    <CodeBlock md={StyleMD}>
        <Style />
        <P
            zh='通过render更换图标。'
        />
    </CodeBlock>
)

export default {
    One,
    Two,
    Three,
    Four,
    Five,
    Six
}