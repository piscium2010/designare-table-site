import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import P from '../../components/P'

const One = () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P
            zh='react-resizable? 不需要。只需要打开resizable'
            en='react-resizable? not required. Only needs a resizable prop.'
        />
    </CodeBlock>
)

export default {
    One
}