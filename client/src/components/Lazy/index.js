import React from 'react'

export default class Lazy extends React.Component {
    state = { loading: false, component: null }

    componentDidMount() {
        this.setState({ loading: true })
        import('../../examples/' + this.props.name).then(module => {
            this.setState({
                loading: false,
                component: module.default
            })
        })
    }

    render() {
        const style = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
        const { loading, component: C } = this.state
        return C ? <C {...this.props} /> : <div style={style}>Loading...</div>
    }
}