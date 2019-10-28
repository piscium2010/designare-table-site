import React from 'react'
import ReactDOM from 'react-dom'
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
import './app.less'

class App extends React.Component {
    static a = 1
    render() {
        return (
            <div>
                {/* <h2>Usage</h2>
                <Flipper defaultActiveIndex={0}>
                    <Flipper.Tab title='Basic' index={0}>
                        <Usage.One />
                    </Flipper.Tab>
                    <Flipper.Tab title='Cell' index={1}>
                        <Usage.Two />
                    </Flipper.Tab>
                    <Flipper.Tab title='Style' index={2}>
                        <Usage.Three />
                    </Flipper.Tab>
                </Flipper>
                <h2>Group</h2>
                <Flipper defaultActiveIndex={0}>
                    <Flipper.Tab title='Header' index={0}>
                        <GroupHeader.One />
                    </Flipper.Tab>
                    <Flipper.Tab title='Row' index={1}>
                        <GroupHeader.Two />
                    </Flipper.Tab>
                </Flipper>
                <h2>Selection</h2>
                <Flipper defaultActiveIndex={0}>
                    <Flipper.Tab title='Basic' index={0}>
                        <Selection.One />
                    </Flipper.Tab>
                </Flipper> */}
                {/* <h2>Loading</h2>
                <Flipper defaultActiveIndex={2}>
                    <Flipper.Tab title='Basic' index={0}>
                        <Loading.One />
                    </Flipper.Tab>
                    <Flipper.Tab title='Custom' index={1}>
                        <Loading.Two />
                    </Flipper.Tab>
                    <Flipper.Tab title='Custom' index={2}>
                        <Loading.Three />
                    </Flipper.Tab>
                </Flipper>
                <h2>Sorter</h2>
                <Flipper defaultActiveIndex={5}>
                    <Flipper.Tab title='Basic' index={0}>
                        <Sorter.One />
                    </Flipper.Tab>
                    <Flipper.Tab title='Default' index={1}>
                        <Sorter.Two />
                    </Flipper.Tab>
                    <Flipper.Tab title='Control' index={2}>
                        <Sorter.Three />
                    </Flipper.Tab>
                    <Flipper.Tab title='Sort by Server' index={3}>
                        <Sorter.Four />
                    </Flipper.Tab>
                    <Flipper.Tab title='Color' index={4}>
                        <Sorter.Five />
                    </Flipper.Tab>
                    <Flipper.Tab title='Style' index={5}>
                        <Sorter.Six />
                    </Flipper.Tab>
                </Flipper>
                <h2>Filter</h2>
                <Flipper defaultActiveIndex={5}>
                    <Flipper.Tab title='Basic' index={0}>
                        <Filter.One />
                    </Flipper.Tab>
                    <Flipper.Tab title='Default' index={1}>
                        <Filter.Two />
                    </Flipper.Tab>
                    <Flipper.Tab title='Control' index={2}>
                        <Filter.Three />
                    </Flipper.Tab>
                    <Flipper.Tab title='By Server' index={3}>
                        <Filter.Four />
                    </Flipper.Tab>
                    <Flipper.Tab title='Color' index={4}>
                        <Filter.Five />
                    </Flipper.Tab>
                    <Flipper.Tab title='Custom' index={5}>
                        <Filter.Six />
                    </Flipper.Tab>
                </Flipper>
                <h2>RowHeight</h2>
                <Flipper defaultActiveIndex={1}>
                    <Flipper.Tab title='Basic' index={0}>
                        <RowHeight.One />
                    </Flipper.Tab>
                    <Flipper.Tab title='Header' index={1}>
                        <RowHeight.Two />
                    </Flipper.Tab>
                </Flipper>
                <h2>Title</h2>
                <Flipper defaultActiveIndex={0}>
                    <Flipper.Tab title='Basic' index={0}>
                        <Title.One />
                    </Flipper.Tab>
                </Flipper>
                <h2>Expansion</h2>
                <Flipper defaultActiveIndex={0}>
                    <Flipper.Tab title='Basic' index={0}>
                        <Expansion.One />
                    </Flipper.Tab>
                </Flipper>
                <h2>Tree</h2>
                <Flipper defaultActiveIndex={1}>
                    <Flipper.Tab title='Basic' index={0}>
                        <Tree.One />
                    </Flipper.Tab>
                    <Flipper.Tab title='Basic' index={1}>
                        <Tree.One />
                    </Flipper.Tab>
                </Flipper> */}
                {/* <h2>Fixed</h2>
                <Flipper defaultActiveIndex={0}>
                    <Flipper.Tab title='Header' index={0}>
                        <Fixed.One />
                    </Flipper.Tab>
                    <Flipper.Tab title='Left' index={1}>
                        <Fixed.Two />
                    </Flipper.Tab>
                    <Flipper.Tab title='Right' index={2}>
                        <Fixed.Three />
                    </Flipper.Tab>
                    <Flipper.Tab title='Expansion' index={3}>
                        <Fixed.Four />
                    </Flipper.Tab>
                </Flipper>
                <h2>Click Row</h2>
                <Flipper defaultActiveIndex={0}>
                    <Flipper.Tab title='Basic' index={0}>
                        <Events.One />
                    </Flipper.Tab>
                </Flipper>
                <h2>Edit Cell</h2>
                <Flipper defaultActiveIndex={0}>
                    <Flipper.Tab title='Basic' index={0}>
                        <EditCell.One />
                    </Flipper.Tab>
                </Flipper> */}
                <h2>Edit Row</h2>
                <Flipper defaultActiveIndex={0}>
                    <Flipper.Tab title='Basic' index={0}>
                        <EditRow.One />
                    </Flipper.Tab>
                </Flipper>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))