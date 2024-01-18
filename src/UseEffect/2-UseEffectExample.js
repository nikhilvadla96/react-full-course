import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const url ="https://jsonplaceholder.typicode.com/users";

    const[userData,setUserData] = useState([])

    const [loading ,setLoading] = useState(false)

    const [isError,setIsError] = useState({
        status:false,
        msg:''
    })

    const fetchUserData =async (apiCall)=>{
        try {
            
            setLoading(true)
        setIsError({status:false,msg:''})
            const response = await fetch(apiCall)
            const data =await response.json()
            setUserData(data)
            setLoading(false)
            setIsError({status:false,msg:''})
            if(response.status === 404){
               throw new Error('data not found')
            }
            
        } catch (error) {
                 setLoading(false)
                 setIsError({
                    status:true,
                    msg:error.message ||  'Something went wrong'
                 })
        }
    }

    useEffect(()=>{
      fetchUserData(url)
    },[])
        
if(loading){
   return (<div>
    <h1>Loading...</h1>
   </div>)
}
if(isError?.status){
   return(
    <div>
        <h3 style={{color:'red'}}>{isError.msg}</h3>
    </div>
   )
}

  return (
    <div>
        <strong>Users Details</strong>
        <ul>
            {
                userData.map((eachUser)=>{
                    const {id,name,email}  = eachUser;
                    return(
                        <div key={id}>
                            <li>{name}</li>
                            <li>{email}</li>
                        </div>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default UseEffect