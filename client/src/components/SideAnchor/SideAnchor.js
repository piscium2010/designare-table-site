import React, { useState, useEffect } from 'react'

let id = 0

export const SideAnchorContext = React.createContext({})

export default function SideAnchor(props) {
    const [store] = useState(new Map())
    const [map] = useState(new Map())
    const [titles, setTitles] = useState([])
    const [activeTitle, setActiveTitle] = useState()
    const findActiveAnchor = scrollTop => {
        let result
        const activeKey = store.get('activeKey') || 0
        const current = map.get(activeKey)
        const innerHeight = window.innerHeight
        const down = current.getBoundingClientRect().top < innerHeight / 2 ? true : false

        for (let i = activeKey, len = map.size; true; i = down ? i + 1 : i - 1) {
            let el, key = i, top, offsetTop, prev, next
            if (key < 0) {
                result = 0
                break
            }
            if (key >= len) {
                result = len - 1
                break
            }
            el = map.get(key)
            offsetTop = el.offsetTop

            if (down) {
                if (offsetTop - scrollTop > 0) {
                    prev = Math.max(key - 1, 0)
                    top = el.getBoundingClientRect().top
                    result = top < innerHeight / 2 ? key : prev
                    break
                }
            } else {
                if (offsetTop - scrollTop <= 0) {
                    next = Math.min(key + 1, len - 1)
                    top = map.get(next).getBoundingClientRect().top
                    result = top < innerHeight / 2 ? next : key
                    break
                }
            }
        }

        store.set('activeKey', result)
        setActiveTitle(map.get(result).textContent)
    }

    const onScroll = evt => {
        id++
        const eventId = id, scrollTop = evt.target.scrollTop
        store.set('eventId', eventId)
        setTimeout(() => {
            if (eventId === store.get('eventId')) {
                findActiveAnchor(scrollTop)
            }
        }, 100)
    }

    const update = () => {
        const scrollTop = document.getElementById('app').scrollTop
        findActiveAnchor(scrollTop)
    }

    const onClick = evt => {
        map.get(evt.target.textContent).scrollIntoView()
    }

    useEffect(() => {
        const r = []
        const app = document.getElementById('app')
        const titles = document.getElementsByTagName('h2')

        for (let i = 0, len = titles.length; i < len; i++) {
            r.push(titles[i].textContent)
            map.set(i, titles[i])
        }
        setTitles(r)
        app.addEventListener('scroll', onScroll)
        setTimeout(update, 100)
        return () => app.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <SideAnchorContext.Provider value={{ update }}>
            {props.children}
            <div className='side-anchor'>
                <ul>
                    {
                        titles.map((t, i) => (
                            <li key={i} className={`${activeTitle === t ? 'active' : ''}`} onClick={onClick}>
                                <a role='button'>{t}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SideAnchorContext.Provider>
    )
}