import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Expansion from './Expansion.example'
import ExpansionMD from './Expansion.md'

export default () => (
    <CodeBlock md={ExpansionMD}>
        <Expansion />
    </CodeBlock>
)
