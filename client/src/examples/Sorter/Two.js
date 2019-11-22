import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import DefaultE from './Default.example'
import DefaultMD from './Default.md'
import Control from './Control.example'
import ControlMD from './Control.md'
import Server from './Server.example'
import ServerMD from './Server.md'
import Color from './Color.example'
import ColorMD from './Color.md'
import Style from './Style.example'
import StyleMD from './Style.md'
import P from '../../components/P'

const One = () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P
            zh={"通过 by='number' 来快速使用内建的排序方法，其它的内建排序方法？没有了。。。 by可以自定义，省略时会使用字符串排序"}
        />
    </CodeBlock>
)
const Two = () => (
    <CodeBlock md={DefaultMD}>
        <DefaultE />
        <P
            zh="directions 的有效值有 'asc'和'des'。特殊有效值为'default', 无需显示指定。"
        />
    </CodeBlock>
)
const Three = () => (
    <CodeBlock md={ControlMD}>
        <Control />
        <P
            zh="请不要同时指定defaultSorter和sorter, 如果你这样做，我会打你。"
        />
    </CodeBlock>
)
const Four = () => (
    <CodeBlock md={ServerMD}>
        <Server />
        <P
            zh="如果by不等于‘number'，也不是一个function，就不会触发内建的前端排序。"
        />
    </CodeBlock>
)
const Five = () => (
    <CodeBlock md={ColorMD}>
        <Color />
        <P
            zh="activeColor 和 defaultColor 可以传给Sorter 也可以传给Table。 后者将同时作用于Sorter和Filter"
        />
    </CodeBlock>
)

const Six = () => (
    <CodeBlock md={StyleMD}>
        <Style />
        <P
            zh={
                <span>自己喜欢的<strike style={{ color: 'red' }}><span style={{ color: 'rgba(0, 0, 0, .87)' }}>妹子</span></strike>图标得自己找。 通过类名designare-transition，轻松使用过度效果。</span>
            }
        />
    </CodeBlock>
)

export default {
    One,
    Two,
    Three,
    Four,
    Five,
    Six
}