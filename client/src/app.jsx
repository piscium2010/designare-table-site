import React from 'react'
import ReactDOM from 'react-dom'
import Flipper from './components/Flipper'
import Usage from './examples/Usage'
import GroupHeader from './examples/GroupHeader'
import Selection from './examples/Selection'
import Sorter from './examples/Sorter'
import RowHeight from './examples/RowHeight'
import Title from './examples/Title'
import Expansion from './examples/Expansion'
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
                <h2>Group Header</h2>
                <Flipper defaultActiveIndex={0}>
                    <Flipper.Tab title='Basic' index={0}>
                        <GroupHeader.One />
                    </Flipper.Tab>
                </Flipper>
                <h2>Selection</h2>
                <Flipper defaultActiveIndex={0}>
                    <Flipper.Tab title='Basic' index={0}>
                        <Selection.One />
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
                </Flipper> */}
                <h2>Expansion</h2>
                <Flipper defaultActiveIndex={0}>
                    <Flipper.Tab title='Basic' index={0}>
                        <Expansion.One />
                    </Flipper.Tab>
                </Flipper>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))