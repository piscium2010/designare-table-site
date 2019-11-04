import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import P from '../../components/P'

const One = () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P
            zh='把树形结构的数据“打平”后，像平常一样使用Table。使用工具类Tree“打平”数据。'
        />
    </CodeBlock>
)

export default {
    One
}