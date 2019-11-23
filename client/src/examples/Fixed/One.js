import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Header from './Header.example'
import HeaderMD from './Header.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={HeaderMD}>
        <Header />
        <P zh='和自然的div一样，给一个高度，它就滚了。'/>
    </CodeBlock>
)