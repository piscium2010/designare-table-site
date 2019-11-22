import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Control from './Control.example'
import ControlMD from './Control.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={ControlMD}>
        <Control />
        <P
            zh="请不要同时指定defaultSorter和sorter, 如果你这样做，我会打你。"
        />
    </CodeBlock>
)
