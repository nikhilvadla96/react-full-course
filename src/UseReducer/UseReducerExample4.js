import React, { useEffect, useReducer, useState } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/users'

const UseReducerExample4 = () => {

    const intialObj = {
        userData :[],
        isLoading : false,
        isError : {status:false,msg:''},
        isEditing :{status: false , id :'' , name :'' , email:''}
    }

    const upadteUserData =(id , name , email) =>{
        dispather({type:"UPDATE_USER" , payload :{id , name , email}})

        dispather({type:'EDIT' , payload :{status :false , id: '',name: '' ,email: ''}})
    }

    const reducer =(state , action) =>{

        if(action.type==="ADD_DATA"){
           return{
            ...state,
            userData:action.payload
           }
        }
        if(action.type==="LOADING"){
            return{
             ...state,
             isLoading:action.payload
            }
         }
        /* if(action.type==="ERROR"){
            return{
             ...state,
             userData:action.payload.status
            }
         }*/
         if(action.type === 'DELETE'){
            console.log(action.payload);
            const new_Data = state.userData.filter((eachuser) =>{
                return eachuser.id !== action.payload
            })
            return{
                ...state,
                userData: new_Data
            }
         }
         if(action.type === 'EDIT'){
            return{
                ...state,
                isEditing:action.payload
            }
         }
         if(action.type==="UPDATE_USER"){
            console.log(action.payload);
            const new_Data = state.userData.map((eachUser)=>{
                if(eachUser.id === action.payload.id){
                    return {
                        id:action.payload.id,
                        name:action.payload.name,
                        email:action.payload.email
                    }
                }else{
                    return eachUser
                }
            })
            return{
                ...state,
                userData:new_Data
            }
         }
         return state
    }

    const fetchApi = async (Api)=>{
        try {
            dispather({type : "LOADING" , payload : true})
            //dispather({type : "ERROR" , payload : {status : false , msg :''}})
            const response = await fetch(Api)
            const data = await response.json();
            dispather({type : "ADD_DATA" , payload : data})
            dispather({type : "LOADING" , payload : false})
            //dispather({type : "ERROR" , payload : {status : false , msg : ''}})
            
        } catch (error) {
            dispather({type:'LOADING' , payload:false})
           // dispather({type : "ERROR" , payload : {status : true , msg : error.message}})
            
        }   
    }

    useEffect(()=>{
       fetchApi(URL)
    },[])

    

    const[state , dispather]= useReducer(reducer , intialObj)

if(state.isLoading){
   return(
    <div>Loading...</div>
   )
}

  return (
    
    <div>
        {
            state.isEditing.status === true && <SetDataToFields id ={state.isEditing.id} commingname= {state.isEditing.name}
            commingemail={state.isEditing.email} upadteUserData={upadteUserData}/>
        }
        {
            state.userData.map((eachUser) =>{
                const {id , name , email} = eachUser
                return(
                    <div key={id}>
                        <strong>{name}</strong>
                        <p>{email}</p>
                        <button type='button'  onClick={() =>dispather({type:'DELETE' , payload :id})}>Delete</button>
                        <button type='button' onClick={() =>dispather({type:'EDIT' , payload :{status :true , id: id,name: name ,email: email}})}>Edit</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UseReducerExample4

const SetDataToFields = ({id , commingname , commingemail , upadteUserData}) =>{
    const [name , setName] = useState(commingname)
    const [email ,setEmail] = useState(commingemail)
    return(
        <>
          <input  name='name' value={name} onChange={(e) =>{setName(e.target.value)}}/>
          <input name='email' value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
          <button onClick={()=>upadteUserData(id , name ,email)}>Update Data</button>
        </>
    )
}