
import {render} from "react-dom"
import React, {Component} from 'react'



class Stopwatch extends Component {

    state = {
        intervalId: null,
        isStarted : false,
        seconds : 0,
        minutes : 0,
        msecondss : 0
    }
    
    render(){

        return(
            <div style={{textAlign: "center"}}>
                <div class="tablo">{this.state.minutes}:{this.state.seconds}:{this.state.msecondss}</div>
              
                <ResetButton
                    onResetBtn={this.resetClick.bind(this)}
                />
                <StartStopButton


                    isStarted={this.state.isStarted} 
                    onStartBtn={this.handleClick.bind(this)}
                />
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            //seconds: this.state.seconds + 1,
            isStarted: !this.state.isStarted
        })
        /*if (this.state.seconds == 59) {
            this.setState({ seconds: 0,minutes: this.state.minutes + 1})
        } else {
            this.setState({ seconds: this.state.seconds + 1 });
        }*/
    }
    resetClick = () => {
        this.setState({
            minutes : this.state.minutes = 0,
            seconds : this.state.seconds = 0,
            msecondss : this.state.msecondss = 0,
            isStarted : false
        })
    }
    componentDidMount() {

        let intervalId = setInterval(this.timer.bind(this), 10);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
     }
     
     timer() {
        if(this.state.isStarted == true)
        {
            console.log('tick');
            if (this.state.msecondss == 99) {
                this.setState({ msecondss: 0,seconds: this.state.seconds + 1})
            } else {
                this.setState({ msecondss: this.state.msecondss + 1 });
            }

            if (this.state.seconds == 59) {
                this.setState({ seconds: 0,minutes: this.state.minutes + 1});
            } 
        }
    }
}


class StartStopButton extends Component {

    render() {
        const {isStarted, onStartBtn} = this.props
        return (
            <div>
                
                    <button class="startstop_button" onClick={onStartBtn}>
                        <span>{isStarted ? 'stop' : 'start'}</span>
                    </button>
                    
                
            </div>
        )
    }


}


class ResetButton extends Component {

    render() {
        const {onResetBtn} = this.props
        return (
            <div>
                <h2>
                    <button class="reset_button"  onClick={onResetBtn}>
                        reset
                    </button>
                </h2>
            </div>
        )
    }


}

render(<Stopwatch/>, document.getElementById("root"));