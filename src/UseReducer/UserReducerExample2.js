import React, { useReducer } from 'react'


const UserReducerExample2 = () => {

  const userDetails = [{ 
    id:1,
    name:'Sathya',
  email:'sathya@gmail.com',
  number:'XXXXXXXXX699'},
  {
    id:2,
     name:'Surya',
  email:'surya@gmail.com',
  number:'XXXXXXXXX689'}]

  const reducer =(state,  action)=>{
   if(action.type === "Edit"){
       const result = state.filter((eachUser) =>{
        console.log(state ,action.payLoad );
        return eachUser.id !== action.payLoad
       })
       
       return(
        result
       )
   }

  }

  const editDetails =(id) =>{

    dispather({
      type:'Edit',
      payLoad: id
    })

  }

    const [state , dispather] = useReducer(reducer , userDetails)
  return (
    <div>
          {
            state.map((eachUser) =>{
             return(
              <li key={eachUser.id}>
                <ul>{eachUser.name}</ul>
                <ul>{eachUser.email}</ul>
                <ul>{eachUser.number}</ul>
                <button type='button' onClick={() => editDetails(eachUser.id) }>Edit</button>
                <hr></hr>
              </li>
                )
            })
          }
    </div>
  )
}

export default UserReducerExample2