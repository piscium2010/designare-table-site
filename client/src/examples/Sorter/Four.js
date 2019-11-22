import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Server from './Server.example'
import ServerMD from './Server.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={ServerMD}>
        <Server />
        <P
            zh="如果by不等于‘number'，也不是一个function，就不会触发内建的前端排序。"
        />
    </CodeBlock>
)
