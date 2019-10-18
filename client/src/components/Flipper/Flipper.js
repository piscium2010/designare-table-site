import React, { useState, useContext, useEffect } from 'react'

export const FlipperContext = React.createContext({})

export default function Flipper(props) {
    const { defaultActiveIndex = 0 } = props
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)
    const [titles, setTitles] = useState({})
    const [animation, setAnimation] = useState(false)
    const [expansion, setExpansion] = useState(false)
    const onClickMore = evt => setAnimation(true)
    const onClickTab = index => setActiveIndex(index)

    return (
        <FlipperContext.Provider value={{ titles, setTitles, activeIndex, expansion, setExpansion }}>
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
                            <span className='secondary-text' role='button' onClick={onClickMore}>
                                More
                            </span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div style={{ width: '90%', margin: 'auto' }}>
                        {props.children}
                    </div>
                </div>
            </div>
        </FlipperContext.Provider>
    )
}

Flipper.Tab = Tab

function Tab(props) {
    const { activeIndex, titles, setTitles } = useContext(FlipperContext)
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