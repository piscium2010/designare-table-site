import React, { useState, useEffect } from 'react'

let id = 0

export const SideAnchorContext = React.createContext({})

export default function SideAnchor(props) {
    const [map] = useState(new Map())
    const [titles, setTitles] = useState([])
    const [activeTitle, setActiveTitle] = useState()
    const findActiveAnchor = scrollTop => {
        const keys = map.keys()
        let done = false,
            next = keys.next(),
            prevValue = next.value,
            result
        while (!done && next) {
            const el = map.get(next.value)
            if (el.offsetTop > scrollTop) {
                done = true
                const top = el.getBoundingClientRect().top
                result = top < window.innerHeight ? next.value : prevValue
            }
            prevValue = next.value
            next = keys.next()
        }
        setActiveTitle(result)
        // return result
    }
    const onScroll = evt => {
        id++
        const eventId = id, scrollTop = evt.target.scrollTop
        map.set('eventId', eventId)
        setTimeout(() => {
            if (eventId === map.get('eventId')) {
                findActiveAnchor(scrollTop)
            }
        }, 100)
    }

    const update = () => {
        const scrollTop = document.getElementById('app').scrollTop
        findActiveAnchor(scrollTop)
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
        <SideAnchorContext.Provider value={{update}}>
            {props.children}
            <div className='side-anchor'>
                <ul>
                    {
                        titles.map((t, i) => {
                            return (
                                <li key={i} className={`${activeTitle === t ? 'active' : ''}`}>
                                    <a role='button'>{t}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </SideAnchorContext.Provider>
    )
}