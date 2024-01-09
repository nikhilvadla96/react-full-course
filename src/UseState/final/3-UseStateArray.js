import React, { useState } from 'react'

const Index = () => {
    const InitialArray = [
        {
            id:"1",
            firstName :"Emma",
            lastName:"Watson",
            age:27
        },
        {
            id:"2",
            firstName:"Srikanth",
            lastName:"Racharla",
            age:24
        }
    ]
    const[data ,setData] =useState(InitialArray)

    const handleDelete =(commingId)=>{
        const filterdata = data.filter((eachData) =>{
            return eachData.id !==  commingId;
        })
        setData(filterdata)
        };
  return (
    <div>
        <ul>
            {
                data.map((eachdata,index) =>{
                   const {firstName,lastName,age,id} = eachdata;
                   return(
                    <li key={index}>
                        <div>FirstName :{firstName}</div>
                        <div>LastName :{lastName}</div>
                        <div>Age :{age}</div>
                        <b></b>
                        <button onClick={(e) =>handleDelete(id)}>Delete Me</button>
                    </li>
                   )
                })
            }
        </ul>
    </div>
  )
}

export default Index