import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Style from './Style.example'
import StyleMD from './Style.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={StyleMD}>
        <Style />
        <P
            zh='通过render更换图标。'
            en='Using render to replace icon.'
        />
    </CodeBlock>
)