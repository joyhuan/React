import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import ContactCard from "./ContactCard"
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

// function App() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay
//   const styles = {
//       color: "yello",
//       backgroundColor: red,
//       fontSize: 24
//   }
//
//   if (hours < 12) {
//     timeOfDay = "morning"
//     styles.color = red
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//     styles.color = green
//   } else {
//     timeOfDay = "night"
//     styles.color = yellow
//     }
//
//
//   return (
//     <h1 style = {styles}>Good {timeOfDay}!</h1>
//   )
// }

// function App(){
//     return (
//         <div className="contacts">
//             <ContactCard
//                 contact = {{name="Mr. Whiskerson",
//                             imgUrl="http://placekitten.com/300/200",
//                             phone="(212) 555-1234",
//                             email="mr.whiskaz@catnap.meow"}}
//             />
//
//             <ContactCard
//                 name="Fluffykins"
//                 imgUrl="http://placekitten.com/400/200"
//                 phone="(212) 555-2345"
//                 email="fluff@me.com"
//             />
//
//             <ContactCard
//                 name="Destroyer"
//                 imgUrl="http://placekitten.com/400/300"
//                 phone="(212) 555-3456"
//                 email="ofworlds@yahoo.com"
//             />
//
//             <ContactCard
//                 name="Felix"
//                 imgUrl="http://placekitten.com/200/100"
//                 phone="(212) 555-4567"
//                 email="thecat@hotmail.com"
//             />
//
//         </div>
//     )
// }


class App extends React.Component {
    yourMethodHere() {

    }

    render() {
        const style = this.yourMethodHere()
        return (
            <div>
                <h1>Code goes here</h1>
            </div>
        )
    }
}

export default App
