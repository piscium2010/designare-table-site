import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'

function One(props) {
    return (
        <CodeBlock md={BasicMD}>
            <Basic/>
        </CodeBlock>
    )
}

export default {
    One
}