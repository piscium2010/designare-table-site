import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Hover from './Hover.example'
import HoverMD from './Hover.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={HoverMD}>
        <Hover />
        <P
            zh='让固定列也响应hover事件，需要借助js。'
            en='It does need js to implement hover when fixed columns are present.'
        />
    </CodeBlock>
)