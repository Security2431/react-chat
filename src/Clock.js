import React, { Component } from 'react'

// componentWillMount()

// componentWillReceiveProps()

// shouldComponentUpdate(nextProps, nextState, nextContext)

// componentWillUpdate(nextProps, nextState)

// componentDidUpdate(prevProps, prevState, prevContext)

// componentDidCatch(errorString, errorInfo) // React 16+

// componentDidMount()

// componentWillUnmount()

class Clock extends Component {
    state = {
        time: new Date()
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }

    render() {
        return (
            <p>{ this.state.time.toLocaleTimeString() }</p>
        )
    }
}

export default Clock