import React from "react"
import {render} from "react-dom"

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
function StartStopButton()
{
    return(
        <div>
            <button>start</button>
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