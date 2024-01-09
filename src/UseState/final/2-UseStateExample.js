import React, { useState } from 'react'

const Index = () => {
    const initialObj = {
        firstName:"Emma",
        lastName:"Watson"
    };

    const [data , setData] = useState(initialObj);
    const changeFirstName =() =>{
      
        setData({
            ...data,
            firstName:"Srikanth",
        })
        console.log(initialObj.firstName)
    }
const changelastName =()=>{
    setData({
        ...data,
        lastName:"Racharla"
    })
}

  return (
    <div style={{textAlign:"center"}}>
        <h1>My Name is {data.firstName}</h1>
        <button onClick={changeFirstName}>change Firstname</button>
        <h1>My last name is {data.lastName}</h1>
        <button onClick={changelastName}>change last name</button>
    </div>
  )
}

export default Index