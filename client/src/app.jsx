import React from 'react'
import ReactDOM from 'react-dom'
import Flipper from './components/Flipper'
import Usage from './examples/Usage'
import CodeBlock from './components/CodeBlock'
import './app.less'

class App extends React.Component {
    static a = 1
    render() {
        return (
            <div>
                <Flipper>
                    <Flipper.Tab title='Basic' index={0}>
                        <Usage.One />
                    </Flipper.Tab>
                    <Flipper.Tab title='Lorem 2' index={1}>Lorme 2</Flipper.Tab>
                </Flipper>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))