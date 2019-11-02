import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Header from './Header.example'
import HeaderMD from './Header.md'
import Left from './Left.example'
import LeftMD from './Left.md'
import Right from './Right.example'
import RightMD from './Right.md'
import Expansion from './Expansion.example'
import ExpansionMD from './Expansion.md'
import Hover from './Hover.example'
import HoverMD from './Hover.md'

const One = () => (<CodeBlock md={HeaderMD}><Header /></CodeBlock>)
const Two = () => (<CodeBlock md={LeftMD}><Left /></CodeBlock>)
const Three = () => (<CodeBlock md={RightMD}><Right /></CodeBlock>)
const Four = () => (<CodeBlock md={ExpansionMD}><Expansion /></CodeBlock>)
const Five = () => (<CodeBlock md={HoverMD}><Hover /></CodeBlock>)

export default {
    One,
    Two,
    Three,
    Four,
    Five
}