import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import DefaultE from './Default.example'
import DefaultMD from './Default.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={DefaultMD}>
        <DefaultE />
        <P
            zh="directions 的值可为有 'asc'，'des' 和 ‘default'。其中'default', 无需显示指定。"
            en="directions includes 'asc'，'des' and ’defualt‘. 'default' could be omitted."
        />
    </CodeBlock>
)
