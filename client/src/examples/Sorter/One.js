import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import P from '../../components/P'

export default () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P
            zh={"通过 by='number' 来快速使用内建的排序方法，其它的内建排序方法？没有了。。。 by可以自定义，省略时会使用字符串排序"}
            en={"With by='number' it triggers the built-in sorting behavior，Passing function to by to achieve custom sorting. When default, it sorts as string."}
        />
    </CodeBlock>
)
