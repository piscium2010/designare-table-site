import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Style from './Style.example'
import StyleMD from './Style.md'
import P from '../../components/P'

const Two = () => (
    <CodeBlock md={StyleMD}>
        <Style />
        <P
            zh='通过类名designare-spin，可以使用内建的旋转动效。当然也不介意你重新开发一个自己喜欢的动效。'
        />
    </CodeBlock>
)

export default Two