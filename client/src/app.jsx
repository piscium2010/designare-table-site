import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Tabs from './components/Tabs'
import SideAnchor from './components/SideAnchor'
import Usage from './examples/Usage/One'
import Group from './examples/Group'
import Selection from './examples/Selection'
import Loading from './examples/Loading/One'
import Sorter from './examples/Sorter/One'
import Filter from './examples/Filter/One'
import RowHeight from './examples/RowHeight'
import Title from './examples/Title'
import Expansion from './examples/Expansion'
import Tree from './examples/Tree'
import Fixed from './examples/Fixed/One'
import Events from './examples/Events'
import EditCell from './examples/EditCell'
import EditRow from './examples/EditRow'
import EditRowWithValidation from './examples/EditRowWithValidation'
import Pagination from './examples/Pagination/One'
import DnD from './examples/DnD/One'
import Resize from './examples/Resize'
import Language from './components/Language'
import P from './components/P'
import GitLink from './components/GithubLink'
import './app.less'

export const LanguageContext = React.createContext('zh')

function App() {
    const [lang, setLang] = useState('zh')

    return (
        <SideAnchor>
            <GitLink/>
            <div className='main'>
                <div style={{ padding: '0 6px' }}>
                    <LanguageContext.Provider value={lang}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h1>Designare Table</h1>
                            <Language onClick={evt => setLang(lang === 'zh' ? 'en' : 'zh')} />
                        </div>
                        <P
                            zh={`以朴素的UI为底，留有设计的空间；以企业功能为诉求，也留有定制的余地。它轻，没有繁重的依赖就；巧，没有过度的API设计。试图在灵活与简洁的两端中追求平衡。`}
                            en={'With plain UI output, it spares room for re-designing; Common features included, but it is still customizable. It has light size and less API. It is trying to reach the balance point between code brevity and feature flexibility.'}
                        />
                        <h2>Usage</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <Usage />
                            </Tabs.Tab>
                            <Tabs.LazyTab title='Cell' index={1} load='Usage/Two' />
                            <Tabs.LazyTab title='Custom' index={2} load='Usage/Three' />
                        </Tabs>
                        <h2>RowHeight</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <RowHeight.One />
                            </Tabs.Tab>
                        </Tabs>
                        <h2>Group</h2>
                        <Tabs>
                            <Tabs.Tab title='Header' index={0}>
                                <Group.One />
                            </Tabs.Tab>
                        </Tabs>
                        <h2>Selection</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <Selection.One />
                            </Tabs.Tab>
                        </Tabs>
                        <h2>Loading</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <Loading />
                            </Tabs.Tab>
                            <Tabs.LazyTab title='Custom' index={1} load='Loading/Two' />
                        </Tabs>
                        <h2>Sorter</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <Sorter />
                            </Tabs.Tab>
                            <Tabs.LazyTab title='Default' index={1} load='Sorter/Two' />
                            <Tabs.LazyTab title='Control' index={2} load='Sorter/Three' />
                            <Tabs.LazyTab title='Sort by Server' index={3} load='Sorter/Four' />
                            <Tabs.LazyTab title='Color' index={4} load='Sorter/Five' />
                            <Tabs.LazyTab title='Style' index={5} load='Sorter/Six' />
                        </Tabs>
                        <h2>Filter</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <Filter />
                            </Tabs.Tab>
                            <Tabs.LazyTab title='Default' index={1} load='Filter/Two' />
                            <Tabs.LazyTab title='Control' index={2} load='Filter/Three' />
                            <Tabs.LazyTab title='By Server' index={3} load='Filter/Four' />
                            <Tabs.LazyTab title='Color' index={4} load='Filter/Five' />
                            <Tabs.LazyTab title='Custom' index={5} load='Filter/Six' />
                        </Tabs>
                        <h2>Title</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <Title.One />
                            </Tabs.Tab>
                        </Tabs>
                        <h2>Expansion</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <Expansion.One />
                            </Tabs.Tab>
                        </Tabs>
                        <h2>Tree</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <Tree.One />
                            </Tabs.Tab>
                        </Tabs>
                        <h2>Pagination</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <Pagination />
                            </Tabs.Tab>
                            <Tabs.LazyTab title='Page Size Option' index={1} load='Pagination/Two' />
                            <Tabs.LazyTab title='By Server' index={2} load='Pagination/Three' />
                        </Tabs>
                        <h2>Fixed</h2>
                        <Tabs>
                            <Tabs.Tab title='Header' index={0}>
                                <Fixed />
                            </Tabs.Tab>
                            <Tabs.LazyTab title='Left' index={1} load='Fixed/Two' />
                            <Tabs.LazyTab title='Right' index={2} load='Fixed/Three' />
                            <Tabs.LazyTab title='Expansion' index={3} load='Fixed/Four' />
                            <Tabs.LazyTab title='Hover' index={4} load='Fixed/Five' />
                        </Tabs>
                        <h2>Click Row</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <Events.One />
                            </Tabs.Tab>
                        </Tabs>
                        <h2>Edit Cell</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <EditCell.One />
                            </Tabs.Tab>
                        </Tabs>
                        <h2>Edit Row</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <EditRow.One />
                            </Tabs.Tab>
                        </Tabs>
                        <h2>Validation</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <EditRowWithValidation.One />
                            </Tabs.Tab>
                        </Tabs>
                        <h2>Drag and Drop</h2>
                        <Tabs>
                            <Tabs.Tab title='Header' index={0}>
                                <DnD />
                            </Tabs.Tab>
                            <Tabs.LazyTab title='Row' index={1} load='DnD/Two' />
                        </Tabs>
                        <h2>Resize</h2>
                        <Tabs>
                            <Tabs.Tab title='Basic' index={0}>
                                <Resize.One />
                            </Tabs.Tab>
                        </Tabs>
                    </LanguageContext.Provider>
                </div>
            </div>
        </SideAnchor>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))