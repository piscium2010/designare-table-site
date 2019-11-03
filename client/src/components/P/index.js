import React, { useContext } from 'react'
import { LanguageContext } from '../../app'
export default function P(props) {
    const lang = useContext(LanguageContext)
    const { zh = '', en = '' } = props
    return (
        lang === 'zh'
            ? <p>{zh}</p>
            : <p>{en}</p>
    )
}