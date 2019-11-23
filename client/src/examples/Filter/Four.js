import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Server from './Server.example'
import ServerMD from './Server.md'
import P from '../../components/P'

export default () => (<CodeBlock md={ServerMD}><Server /><P zh='省略by，以回避前端过滤。' /></CodeBlock>)