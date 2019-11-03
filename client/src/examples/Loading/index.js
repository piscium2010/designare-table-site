import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import Style from './Style.example'
import StyleMD from './Style.md'
import P from '../../components/P'

const One = () => (<CodeBlock md={BasicMD}><Basic /></CodeBlock>)
const Two = () => (
    <CodeBlock md={StyleMD}>
        <Style />
        <P
            zh='通过类名designare-spin，可以使用内建的旋转动效。当然也不介意你重新开发一个自己喜欢的动效。'
        />
    </CodeBlock>
)

export default {
    One,
    Two
}