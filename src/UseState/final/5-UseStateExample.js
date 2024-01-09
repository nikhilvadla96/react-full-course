import React, { useState } from 'react'

const Index = () => {
    const[firstName , setFirstName] = useState("")
    const[eMail , seteMail] = useState("")
    const[password , setPassword] = useState("")

   const handleInput =(e,name)=>{
    console.log(e.target.value);
    if(name==='firstName'){
        setFirstName(e.target.value)
    }
    else if(name==='eMail'){
        seteMail(e.target.value)
    }
    else if(name==='password'){
        setPassword(e.target.value)
    }
   }

    const handleSubmit =(e) =>{
            e.preventDefault();
            let userObj ={
                firstName:firstName,
                eMail:eMail,
                password:password

            }
            console.log(userObj)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>handleInput(e,'firstName')} type='text' name='firstName' value={firstName} id='firstName' placeholder='Enter Your Name '></input>
        <br/>
            <input  onChange={(e)=>handleInput(e,'eMail')} type='text' name='eMail' id='eMail' value={eMail} placeholder='Enter Your Email '></input>
            <br/>

            <input onChange={(e)=>handleInput(e,'password')} type='password' name='password' id='password' value={password} placeholder='Enter Your Password '></input>
            <br></br>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Index