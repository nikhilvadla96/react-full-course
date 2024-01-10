import React from "react"

const Events =() =>{


    const clickHandle =(e,firstName) =>{
        console.log("Hello iam Click Event",e,firstName)
    }

    return( 
        <main>
            <button className="button" type="submit" onClick ={(e)=>clickHandle(e,"Smith")}>click me</button>
        </main>
    )
}

export default Events