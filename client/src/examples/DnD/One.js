import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P
            zh='react-dnd? 不需要的。DragTh，DragTr即插即用，减少代码量。'
        />
    </CodeBlock>
)
