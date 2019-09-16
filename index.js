import React from "react" // help JSX becomes legic JavaScript
import ReactDOM from "react-dom"
import MyInfo from "./compnents/MyInfo.js" // remember provide the path
import App from "./App"

// Naming Convention: Caml Case and start the first letter with a capital letter

ReactDOM.render(
    <App />, // currently self-inclosing componnet
    document.createElement("root")
)

ReactDOM.render(
    <MyInfo />, // currently self-inclosing componnet
    document.createElement("root")
)
// ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)
// ReactDOM.render(<div><h1>Hello world!</h1><p> This is a paragraph</p></div>, document.getElementById("root"))
// JSX Javascript version of HTML
// Old way
// var myNewP = document.createElement("p")
// myNewP.innerHTML = "This is a paragraph."
