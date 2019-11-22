import React, { useState, useContext, useEffect } from 'react'
import { SideAnchorContext } from '../SideAnchor'
export const TabsContext = React.createContext({})

export default function Tabs(props) {
    const { defaultActiveIndex = 0 } = props
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)
    const [titles, setTitles] = useState({})
    const [expansion, setExpansion] = useState()
    const { update } = useContext(SideAnchorContext)
    const onClickTab = index => {
        setActiveIndex(index)
        window.requestAnimationFrame(update)
    }

    useEffect(() => {
        setTimeout(() => {
            setExpansion(false) // simulate force update
        }, 100)
    }, [])

    return (
        <TabsContext.Provider value={{ titles, setTitles, activeIndex, expansion, setExpansion }}>
            <div className='tabs'>
                <div className='title'>
                    <div className={''}>
                        <div style={{ display: 'flex', height: '100%' }}>
                            {
                                Object.keys(titles).map(k => {
                                    return (
                                        <div
                                            key={k}
                                            className={`tab ${activeIndex == k ? 'active' : ''}`}
                                            onClick={evt => onClickTab(k)}
                                        >
                                            {titles[k]}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div style={{ margin: 'auto' }}>
                        {props.children}
                    </div>
                </div>
            </div>
        </TabsContext.Provider>
    )
}

Tabs.Tab = Tab
Tabs.LazyTab = LazyTab

function Tab(props) {
    const { activeIndex, titles, setTitles } = useContext(TabsContext)
    const { title, index } = props

    useEffect(() => {
        titles[index] = title
        setTitles(titles)
    }, [title])

    return activeIndex == index
        ? <div>{props.children}</div>
        : null
}

function LazyTab(props) {
    const [state, setState] = useState({ loading: true, C: null })
    const { activeIndex, titles, setTitles } = useContext(TabsContext)
    const { title, index, load = '' } = props

    useEffect(() => {
        titles[index] = title
        setTitles(titles)
    }, [title])

    useEffect(() => {
        load
            ? import('../../' + load).then(module => setState({ loading: false, C: module.default }))
            : undefined
    }, [])

    const { loading, C } = state
    return activeIndex == index &&
        <div>
            {
                loading
                    ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>Loading...</div>
                    : <C />
            }
        </div>
}