import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Color from './Color.example'
import ColorMD from './Color.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={ColorMD}><Color />
        <P
            zh="activeColor 和 defaultColor 可以传给Filter 也可以传给Table。后者将同时作用于Sorter和Filter。"
            en="activeColor and defaultColor could be passed to Table as well, so it applyes to both Sorter and Filter."
        />
    </CodeBlock>
)