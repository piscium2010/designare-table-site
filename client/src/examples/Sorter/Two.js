import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import DefaultE from './Default.example'
import DefaultMD from './Default.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={DefaultMD}>
        <DefaultE />
        <P
            zh="directions 的有效值有 'asc'和'des'。特殊有效值为'default', 无需显示指定。"
        />
    </CodeBlock>
)
