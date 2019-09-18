import React from "react"

function Joke(props){
    return(
        <div className="joke">
            // <h3 style = {{display: props.question ? "block" : "none" }}>Question: {props.question}</h3>
            <h3 style = {{display: !props.question && "none" }}>Question: {props.question}</h3>
            <h3 style = {{color: !props.question && "grey"}}>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke
