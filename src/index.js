
import {render} from "react-dom"
import React, {Component} from 'react'



class Stopwatch extends Component {

    state = {
        intervalId: null,
        isStarted : false,
        seconds : 0,
        minutes : 0,
        msecondss : 0,
        secondsString : "rabs",
        minutesString : "rabs",
        msecondssString : "rabs"
    }
    
    render(){
        if(this.state.msecondss <= 9)
        {
            this.state.msecondssString = "0"+this.state.msecondss;
        }else{
            this.state.msecondssString = this.state.msecondss;
        }
        if(this.state.seconds <= 9)
        {
            this.state.secondsString = "0"+this.state.seconds;
        }else{
            this.state.secondsString = this.state.seconds;
        }
        if(this.state.minutes <= 9)
        {
            this.state.minutesString = "0"+this.state.minutes;
        }else{
            this.state.minutesString = this.state.minutes;
        }

        return(
            <div style={{textAlign: "center"}}>
                <div class="tablo">{this.state.minutesString}:{this.state.secondsString}:{this.state.msecondssString}</div>
              
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