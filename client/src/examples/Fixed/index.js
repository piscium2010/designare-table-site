import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Header from './Header.example'
import HeaderMD from './Header.md'
import Left from './Left.example'
import LeftMD from './Left.md'
import Right from './Right.example'
import RightMD from './Right.md'
import Expansion from './Expansion.example'
import ExpansionMD from './Expansion.md'
import Hover from './Hover.example'
import HoverMD from './Hover.md'
import P from '../../components/P'

const One = () => (
    <CodeBlock md={HeaderMD}>
        <Header />
        <P zh='和自然的div一样，给一个高度，它就滚了。'/>
    </CodeBlock>
)
const Two = () => (
    <CodeBlock md={LeftMD}>
        <Left />
    </CodeBlock>
)
const Three = () => (
    <CodeBlock md={RightMD}>
        <Right />
    </CodeBlock>
)
const Four = () => (
    <CodeBlock md={ExpansionMD}>
        <Expansion />
    </CodeBlock>
)
const Five = () => (
    <CodeBlock md={HoverMD}>
        <Hover />
        <P zh='让固定列也响应hover事件，需要借助js。'/>
    </CodeBlock>
)

export default {
    One,
    Two,
    Three,
    Four,
    Five
}