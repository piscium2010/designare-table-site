import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P
            zh='Filter组件内置了图标与下拉框，你只需专注于filter内容与逻辑的实现。'
            en='Filter has a built-in icon and a ready-to-use dropdown. So you can focus on developing the content and filtering logic.'
        />
    </CodeBlock>
)
