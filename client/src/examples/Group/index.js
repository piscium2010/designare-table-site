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
            zh='通过rowHeight可以同时指定标题行和行的行高。当需要另外指定标题行的行高时，可以通过Thead来指定。'
        />
    </CodeBlock>
)
const Two = () => (<CodeBlock md={RowMD}><Row /></CodeBlock>)

export default {
    One,
    Two
}