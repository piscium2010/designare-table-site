import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Basic from './Basic.example'
import BasicMD from './Basic.md'
import Cell from './Cell.example'
import CellMD from './Cell.md'
import Style from './Style.example'
import StyleMD from './Style.md'
import P from '../../components/P'

const One = () => (
    <CodeBlock md={BasicMD}>
        <Basic />
        <P
            zh={'许多类库需要明确地指定列宽，designare-table帮你省去了这一痛点。列宽不明确时，可以不指定。另外，当宽度为 * 时，表示榨取剩余价值。'}
            en=''
            border
        />
    </CodeBlock>
)
const Two = () => (<CodeBlock md={CellMD}><Cell /></CodeBlock>)
const Three = () => (<CodeBlock md={StyleMD}><Style /></CodeBlock>)

export default {
    One,
    Two,
    Three
}