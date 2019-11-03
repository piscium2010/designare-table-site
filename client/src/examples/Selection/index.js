import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import P from '../../components/P'

const One = () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P
            zh='如果你有常用的React UI库，可以用其替换例子中原生的checkbox。'
        />
    </CodeBlock>
)

export default {
    One
}