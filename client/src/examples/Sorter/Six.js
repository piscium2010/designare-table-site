import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Style from './Style.example'
import StyleMD from './Style.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={StyleMD}>
        <Style />
        <P
            zh={
                <span>通过类名designare-transition，轻松使用过度效果。</span>
            }
            en={
                <span>Class designare-transition offers a built-in color transition.</span>
            }
        />
    </CodeBlock>
)
