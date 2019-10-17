import React, { useState } from 'react'
import Markdown from '../Markdown'
import Icons from '../Icons'
import MessageBox from '../MessageBox'

export default function CodeBlock(props) {
    const { md } = props
    const [expansion, setExpansion] = useState(false)
    const onClickCode = evt => setExpansion(!expansion)
    const onClickClone = evt => {
        copyToClipboard(md)
        MessageBox.show('Code Copied')
    }
    return (
        <section>
            <div>
                {props.children}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', userSelect: 'none', marginTop: 20, height: 30, lineHeight: '30px' }}>
                <div role='button' style={{ width: 13, height: 13, margin: '0 5px' }} onClick={onClickClone}>
                    <Icons.Clone />
                </div>
                <div role='button' style={{ width: 14, height: 14, margin: '0 5px' }} onClick={onClickCode}>
                    <Icons.Code />
                </div>
            </div>
            {
                expansion &&
                <div>
                    <Markdown md={md} />
                </div>
            }
        </section>
    )
}

function copyToClipboard(str) {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    const selected =
        document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    if (selected) {
        document.getSelection().removeAllRanges()
        document.getSelection().addRange(selected)
    }
}