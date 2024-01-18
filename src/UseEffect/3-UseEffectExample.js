import React, { useState ,useEffect } from 'react'

const UseEffect = () => {

  const url = "https://jsonplaceholder.typicode.com/posts"

  const [post ,setPost] =useState([]);

  const [loading ,setLoading] = useState(false)

  const [iserror ,SetIsError] = useState({
    status :false,
    message :''
  })

  const fetchPostData = async (postData) =>{
   
    try {
      setLoading(true)
      SetIsError({
        status:false,
        message:''
      })
      const response =  await fetch(postData)
       const data = await response.json();
       setPost(data)
       setLoading(false)
       SetIsError({
        status:false,
        message:''
       })

       if(response.status === 404){
             throw new Error("data not found")
       }
    } catch (error) {
      setLoading(false)
      SetIsError({
        status:true,
        message:error.message || 'Please check enterend URL'
      })
      
    }
  }

  useEffect(() =>{
       fetchPostData(url);
  },[])
 
  if(loading){
    return(
      <div>
        <h3>Loading.....</h3>
      </div>
    )
  }
  if(iserror?.status){
     return(
      <div>
        <strong style={{color:'red'}}>
             {iserror.message}
        </strong>
      </div>
     )
  }

  return (
    <div>
      <strong>Post Data</strong>
      <br></br>
      {
        post.map((eachPost)=>{
          return(
            <strong>{eachPost.body}</strong>
          )
        })
      }
    </div>
  )
}

export default UseEffect