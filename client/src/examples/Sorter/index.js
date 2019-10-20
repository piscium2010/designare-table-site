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

const One = () => (<CodeBlock md={BasicMD}><Basic /></CodeBlock>)
const Two = () => (<CodeBlock md={DefaultMD}><DefaultE /></CodeBlock>)
const Three = () => (<CodeBlock md={ControlMD}><Control /></CodeBlock>)
const Four = () => (<CodeBlock md={ServerMD}><Server /></CodeBlock>)
const Five = () => (<CodeBlock md={ColorMD}><Color /></CodeBlock>)
const Six = () => (<CodeBlock md={StyleMD}><Style /></CodeBlock>)

export default {
    One,
    Two,
    Three,
    Four,
    Five,
    Six
}