import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Flipper from './components/Flipper'
import './app.less'

class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path='/' component={
                        () => (
                            <div>
                                <Flipper>
                                    <Flipper.Tab title='Lorem 1' index={0}>Lorem 1</Flipper.Tab>
                                    <Flipper.Tab title='Lorem 2' index={1}>Lorme 2</Flipper.Tab>
                                </Flipper>
                            </div>
                        )}
                    />
                </React.Fragment>
            </Router >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))