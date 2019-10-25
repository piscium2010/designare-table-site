import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Header from './Header.example'
import HeaderMD from './Header.md'
import Left from './Left.example'
import LefttMD from './Left.md'
import Right from './Right.example'
import RightMD from './Right.md'
import Both from './Both.example'
import BothMD from './Both.md'
import Expansion from './Expansion.example'
import ExpansionMD from './Expansion.md'

const One = () => (<CodeBlock md={HeaderMD}><Header /></CodeBlock>)
const Two = () => (<CodeBlock md={LefttMD}><Left /></CodeBlock>)
const Three = () => (<CodeBlock md={RightMD}><Right /></CodeBlock>)
const Four = () => (<CodeBlock md={BothMD}><Both /></CodeBlock>)
const Five = () => (<CodeBlock md={ExpansionMD}><Expansion /></CodeBlock>)

export default {
    One,
    Two,
    Three,
    Four,
    Five
}