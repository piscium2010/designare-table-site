import React from 'react'
import ReactDOM from 'react-dom'
import Tabs from './components/Tabs'
import SideAnchor from './components/SideAnchor'
import Flipper from './components/Flipper'
import Usage from './examples/Usage'
import GroupHeader from './examples/Group'
import Selection from './examples/Selection'
import Loading from './examples/Loading'
import Sorter from './examples/Sorter'
import Filter from './examples/Filter'
import RowHeight from './examples/RowHeight'
import Title from './examples/Title'
import Expansion from './examples/Expansion'
import Tree from './examples/Tree'
import Fixed from './examples/Fixed'
import Events from './examples/Events'
import EditCell from './examples/EditCell'
import EditRow from './examples/EditRow'
import EditRowWithValidation from './examples/EditRowWithValidation'
import Pagination from './examples/Pagination'
import DnD from './examples/DnD'
import Resize from './examples/Resize'

import './app.less'

class App extends React.Component {
    static a = 1
    render() {
        return (
            <div>
                <SideAnchor>
                    <div className='main'>
                        <div style={{padding:'0 6px'}}>
                            <h2>Usage</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <Usage.One />
                                </Tabs.Tab>
                                <Tabs.Tab title='Cell' index={1}>
                                    <Usage.Two />
                                </Tabs.Tab>
                                <Tabs.Tab title='Style' index={2}>
                                    <Usage.Three />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Group</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Header' index={0}>
                                    <GroupHeader.One />
                                </Tabs.Tab>
                                <Tabs.Tab title='Row' index={1}>
                                    <GroupHeader.Two />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Selection</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <Selection.One />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Loading</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <Loading.One />
                                </Tabs.Tab>
                                <Tabs.Tab title='Custom' index={1}>
                                    <Loading.Two />
                                </Tabs.Tab>
                                <Tabs.Tab title='Custom' index={2}>
                                    <Loading.Three />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Sorter</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <Sorter.One />
                                </Tabs.Tab>
                                <Tabs.Tab title='Default' index={1}>
                                    <Sorter.Two />
                                </Tabs.Tab>
                                <Tabs.Tab title='Control' index={2}>
                                    <Sorter.Three />
                                </Tabs.Tab>
                                <Tabs.Tab title='Sort by Server' index={3}>
                                    <Sorter.Four />
                                </Tabs.Tab>
                                <Tabs.Tab title='Color' index={4}>
                                    <Sorter.Five />
                                </Tabs.Tab>
                                <Tabs.Tab title='Style' index={5}>
                                    <Sorter.Six />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Filter</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <Filter.One />
                                </Tabs.Tab>
                                <Tabs.Tab title='Default' index={1}>
                                    <Filter.Two />
                                </Tabs.Tab>
                                <Tabs.Tab title='Control' index={2}>
                                    <Filter.Three />
                                </Tabs.Tab>
                                <Tabs.Tab title='By Server' index={3}>
                                    <Filter.Four />
                                </Tabs.Tab>
                                <Tabs.Tab title='Color' index={4}>
                                    <Filter.Five />
                                </Tabs.Tab>
                                <Tabs.Tab title='Custom' index={5}>
                                    <Filter.Six />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>RowHeight</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <RowHeight.One />
                                </Tabs.Tab>
                                <Tabs.Tab title='Header' index={1}>
                                    <RowHeight.Two />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Title</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <Title.One />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Expansion</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <Expansion.One />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Tree</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <Tree.One />
                                </Tabs.Tab>
                                <Tabs.Tab title='Basic' index={1}>
                                    <Tree.One />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Pagination</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <Pagination.One />
                                </Tabs.Tab>
                                <Tabs.Tab title='Page Size' index={1}>
                                    <Pagination.Two />
                                </Tabs.Tab>
                                <Tabs.Tab title='By Server' index={2}>
                                    <Pagination.Three />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Fixed</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Header' index={0}>
                                    <Fixed.One />
                                </Tabs.Tab>
                                <Tabs.Tab title='Left' index={1}>
                                    <Fixed.Two />
                                </Tabs.Tab>
                                <Tabs.Tab title='Right' index={2}>
                                    <Fixed.Three />
                                </Tabs.Tab>
                                <Tabs.Tab title='Expansion' index={3}>
                                    <Fixed.Four />
                                </Tabs.Tab>
                                <Tabs.Tab title='Hover' index={4}>
                                    <Fixed.Five />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Click Row</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <Events.One />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Edit Cell</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <EditCell.One />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Edit Row</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <EditRow.One />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Validation</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <EditRowWithValidation.One />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Drag and Drop</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <DnD.One />
                                </Tabs.Tab>
                                <Tabs.Tab title='Page Size' index={1}>
                                    <DnD.Two />
                                </Tabs.Tab>
                            </Tabs>
                            <h2>Resize</h2>
                            <Tabs defaultActiveIndex={0}>
                                <Tabs.Tab title='Basic' index={0}>
                                    <Resize.One />
                                </Tabs.Tab>
                            </Tabs>
                        </div>
                    </div>
                </SideAnchor>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))