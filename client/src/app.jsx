import React from 'react'
import ReactDOM from 'react-dom'
import Flipper from './components/Flipper'
import Usage from './examples/Usage'
import GroupHeader from './examples/GroupHeader'
import Selection from './examples/Selection'
import './app.less'

class App extends React.Component {
    static a = 1
    render() {
        return (
            <div>
                <h2>Usage</h2>
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
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))