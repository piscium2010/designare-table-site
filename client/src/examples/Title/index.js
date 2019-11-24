import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import P from '../../components/P'

const One = () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P
            zh='无需额外的API，只是把div放在了它该有的位置，自然就成为了Title。'
            en='By putting div on the right place, you make a title。No api is needed.'
        />
    </CodeBlock>
)

export default {
    One
}