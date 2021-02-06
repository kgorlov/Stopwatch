
import {render} from "react-dom"
import React, {Component} from 'react'

class StartStopButton extends Component {
    state = {
        isOpen: true
    }

    render() {
        const {article} = this.props
        const body = this.state.isOpen && <section>{article}</section>
        return (
            <div>
                <h2>
                    {article}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'start' : 'stop'}
                    </button>
                </h2>
                {body}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

function Stopwatch()
{
    return(
        <div>
            <h1>0:0</h1>
            <StartStopButton/>
            <ResetButton/>
        </div>
    )
}

function ResetButton()
{
    return(
        <div>
            <button>reset</button>
        </div>
    )
}
render(<Stopwatch/>, document.getElementById("root"));