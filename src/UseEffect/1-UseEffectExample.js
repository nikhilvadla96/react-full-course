import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const[count , setCount] = useState(0)

    const [name,setName] = useState({
        name:'Msd'
    });

    const [pageWidth,setPageWidth] = useState(window.innerWidth)

    const handleInputChanges =(e)=>{

        e.preventDefault();
        setName({
            name:e.target.value
        })
    }
       

    useEffect(()=>{
        const resizeHandler = ()=>{
            setPageWidth(window.innerWidth)
        }
        window.addEventListener("resize",resizeHandler)
        console.log('Hello iam coming from useEffect');

        return() =>{
            console.log("I am InnerWidth");
            window.removeEventListener("resize",resizeHandler)
        }
    },[pageWidth])
  return (
    <div>
        <input type='text' onChange={handleInputChanges} value={name.name}></input>
        <br></br>
        <h4>{pageWidth}</h4>
        <h3>{count}</h3>
        <button onClick={() =>{
            setCount(count+1)}}>Add</button>
    </div>
  )
}

export default UseEffect