import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import P from '../../components/P'

const One = () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P zh='onClickRow API? 不需要的，只需要一个普通的onClick。'/>
    </CodeBlock>
)

export default {
    One
}