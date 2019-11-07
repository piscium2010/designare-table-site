import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import Row from './Row.example'
import RowMD from './Row.md'
import P from '../../components/P'

const One = () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P
            zh='react-dnd? 不需要的。DragTh，DragTr即插即用，减少代码量。'
        />
    </CodeBlock>
)
const Two = () => (<CodeBlock md={RowMD}><Row /></CodeBlock>)

export default {
    One,
    Two
}