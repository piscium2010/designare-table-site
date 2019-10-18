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
                <Flipper defaultActiveIndex={1}>
                    <Flipper.Tab title='Basic' index={0}>
                        <Usage.One />
                    </Flipper.Tab>
                    <Flipper.Tab title='Cell' index={1}>
                        <Usage.Two />
                    </Flipper.Tab>
                </Flipper>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))