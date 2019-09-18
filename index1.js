import React from "react"
import ReactDOM from "react-dom"
import App1 from "./App1" 

ReactDOM.render(
    <App1 />, // currently self-inclosing componnet
    document.createElement("root")
)
