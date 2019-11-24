import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Size from './Size.example'
import SizeMD from './Size.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={SizeMD}><Size />
        <P
            zh='pageSizeOptions 最好不要超过三个。'
            en='Better to have pageSizeOptions less than three.'
        />
    </CodeBlock>
)
