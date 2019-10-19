import React from 'react'
import ReactDOM from 'react-dom'
import Flipper from './components/Flipper'
import Usage from './examples/Usage'
import './app.less'

class App extends React.Component {
    static a = 1
    render() {
        return (
            <div>
                <h2>Usage</h2>
                <Flipper defaultActiveIndex={2}>
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
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))