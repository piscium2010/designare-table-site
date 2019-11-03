import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import P from '../../components/P'

const One = () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P
            zh='当行高不明确时，可以不指定。designare-table会根据需要自动撑开行高。'
        />
    </CodeBlock>
)

export default {
    One
}