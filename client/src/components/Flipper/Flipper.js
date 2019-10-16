import React, { useState, useContext, useEffect } from 'react'

const Context = React.createContext({})

export default function Flipper(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [titles, setTitles] = useState({})
    const [animation, setAnimation] = useState(false)
    const onClickMore = evt => setAnimation(true)
    const onClickTab = index => setActiveIndex(index)
    // const tabs = ['lorem 1', 'lorem 2', 'lorem 3']
    return (
        <Context.Provider value={{ titles, setTitles, activeIndex }}>
            <div className='flipper'>
                <div className='title'>
                    <div className={animation ? 'tabs flipShadow' : ''}>
                        <div className={animation ? 'flipIn detail' : 'detail'} style={{ pointerEvents: animation ? 'auto' : 'none' }}>
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
                        <div className={animation ? 'flipOut more' : 'more'}>
                            <span style={{ cursor: 'pointer' }} onClick={onClickMore}>
                                More
                            </span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </Context.Provider>
    )
}

Flipper.Tab = Tab

function Tab(props) {
    const { activeIndex, titles, setTitles } = useContext(Context)
    const { title, index } = props

    useEffect(() => {
        titles[index] = title
        setTitles(titles)
    }, [title])

    return (
        <React.Fragment>
            {
                activeIndex == index
                    ? <div className={``}>{props.children}</div>
                    : null
            }
        </React.Fragment>
    )
}