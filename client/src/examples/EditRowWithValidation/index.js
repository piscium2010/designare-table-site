import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import P from '../../components/P'
const One = () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P
            zh={<span>可以使用任何字段校验库,本栗使用了<a href='https://github.com/piscium2010/v-form/blob/master/README.md'>@piscium2010/v-form</a></span>}
            en={<span>Feel free to choose any other validation library as you like, here it uses <a href='https://github.com/piscium2010/v-form/blob/master/README.md'>@piscium2010/v-form</a></span>}
        />
    </CodeBlock>
)

export default {
    One
}