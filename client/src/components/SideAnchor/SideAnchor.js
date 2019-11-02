import React, { useState, useEffect } from 'react'

let id = 0

export const SideAnchorContext = React.createContext({})

export default function SideAnchor(props) {
    const [store] = useState(new Map())
    const [map] = useState(new Map())
    const [titles, setTitles] = useState([])
    const [activeTitle, setActiveTitle] = useState()
    const findActiveAnchor = scrollTop => {
        const keys = map.keys()
        let done = false,
            next = keys.next(),
            prevValue = next.value,
            top,
            el,
            result
        while (!done && next) {
            el = map.get(next.value)
            if (el.offsetTop > scrollTop) {
                done = true
                top = el.getBoundingClientRect().top
                result = top < window.innerHeight ? next.value : prevValue
            }
            prevValue = next.value
            next = keys.next()
        }
        setActiveTitle(result)
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
            map.set(titles[i].textContent, titles[i])
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