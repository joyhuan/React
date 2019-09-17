import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"

// function App(){
//     const firstName = "Bob"
//     const lastName = "Ziroll"
//     const date = new Date()
//     return(
//         // <h1> Hello {`${firstName} ${lastName}`}! </h1>  // inside <><> is JSX; {} means into Javascript
//         // <h1> Hello {firstName + " " + lastName}! </h1>  // inside <><> is JSX; {} means into Javascript
//         // <div>
//         //     <Header />
//         //     <MainContent />
//         //     <Footer />
//         // </div>
//     )
// }

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
    }
    
  const styles = {
      color: "yello",
      backgroundColor: red,
      fontSize: 24
  }

  return (
    <h1 style = {styles}>Good {timeOfDay}!</h1>
  )
}

export default App
