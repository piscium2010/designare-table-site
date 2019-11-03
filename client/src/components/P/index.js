import React from 'react'

export default function P(props) {
    const { lang, zh = '', en = '' } = props
    return (
        lang === 'zh'
            ? <p>{zh}</p>
            : <p>{en}</p>
    )
}