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
                <span>自己喜欢的<strike style={{ color: 'red' }}><span style={{ color: 'rgba(0, 0, 0, .87)' }}>妹子</span></strike>图标得自己找。 通过类名designare-transition，轻松使用过度效果。</span>
            }
        />
    </CodeBlock>
)
