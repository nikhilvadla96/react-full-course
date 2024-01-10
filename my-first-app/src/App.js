import CallC from "./CallC.js"
import React from "react"

/*function App (){
    return React.createElement('h1',{className:"heading"} ,"Hello")
}*/

/*function App(){
     return React.createElement("div",{className:"heading"} ,React.createElement("h1",{className:"heading"},"Hello World!!!"))
}*/

function InnerComponent(){
    return <a href="">j,hghjgjkg</a>
}

const PrintName =() =>{
    return <InnerComponent></InnerComponent>
 }
 

const  App =()=>{
    const firstName ="emma"
    const lastName ="watson"

    const user ={
        firstName:"emma",
        lastName:"watson"
    }

    function printName(user){
        return `My full name is ${user.firstName} ${user.lastName}`
    }
    return ( 
    <section className="container">
        <div> 
            <h1>Hello {printName(user)}</h1> 
            <h1>Time {new Date().toLocaleTimeString()}</h1> 
        </div>
         <p>lorem 1kjhjhihh </p>
         <img src="zdsfs" alt={firstName}/>
         <PrintName/>
    </section>
    )
}
export default App