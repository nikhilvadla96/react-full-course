import React, { useEffect, useReducer, useState } from 'react'
const URL = 'https://jsonplaceholder.typicode.com/users'

const UseReducerExample3 = () => {

    const initialObj = {
        userData:[],
        isLoading:false,
        isError:{status : false , msg :''},
        isEditing :{status: false , id :'' , name :'' , email:''}
    }

    const reducer =(state , action) =>{
        if(action.type ==='UPDATE_USER'){
            return {
            ...state,
            userData: action.payload
           }
        };
        if(action.type === 'LOADING'){
            return{
                ...state,
                isLoading:action.payload
            }
        }
        if(action.type === 'ERROR'){
           return{
            ...state,
            isError:{status : action.payload.status}
           }
        }

        if(action.type === 'DELETE_USER'){
             const new_Data = state.userData.filter((eachUser)=>{
                 return eachUser.id !== action.payload
             });
             return{
             ...state,
             userData:new_Data
            }
         }
         if(action.type  === 'UPDATE'){
            console.log(action);
            return{
                ...state ,
                isEditing:action.payload
            }
         }
         if(action.type === "UPADTE_DATA"){
            console.log(state);
            const new_data = state.userData.map((eachUser) =>{
                if(eachUser.id === action.payload.id){
                   return{
                    id:action.payload.id,
                    name:action.payload.name,
                    email:action.payload.email
                   }
                }
                else{
                    return eachUser
                }
            })
            return{
                ...state,
                userData:new_data
            }
         }
    }

    useEffect(()=>{
     fetchhUrl(URL);
    },[])

    const fetchhUrl = async(URL) =>{

        try {
            dispatcher({type:'LOADING' , payload:true})
            dispatcher({type:'ERROR' , payload:{status:false,msg:''}})
            const response =  await fetch(URL)
            const result = await response.json();
            dispatcher({ type : "UPDATE_USER" , payload : result})
            dispatcher({type:'LOADING' , payload:false})
            dispatcher({type:'ERROR' , payload:{status:false,msg:''}})

        } catch (error) {
            dispatcher({type:'LOADING' , payload:false})
            dispatcher({type:'ERROR' , payload:{status:true,msg:error.message}})
        }
    }

    const [state , dispatcher] = useReducer(reducer , initialObj)

        if(state.isLoading){
       return <div><strong>LOADING....</strong></div>
        }

        const updateUserData =(id, name , email)=>{
                 dispatcher({type:"UPDATE_DATA" ,   payload :{id , name , email}})

        }
    



  return (
    <div>
        {
            state.isEditing.status===true && <UpdateUser id = {state.isEditing.id} commingName={state.isEditing.name} commingEmail={state.isEditing.email}
            updateUserData ={updateUserData}/>
        }
        {
            state.userData.map((eachdata)=>{
                const {id , name , email} = eachdata
                return(
                    
                    <div key={id} style={{backgroundColor:'lightblue'}}>
                        <strong>{name}</strong>
                        <p>{email}</p>
                        <button type='button' onClick={() => dispatcher({type : 'DELETE_USER', payload : id})} >Delete</button>
                        <button type='button' onClick={() => dispatcher({type : 'UPDATE', payload : {status : true,id: id , name : name , email:email}})}> Update</button>
                    </div>
                )
            })
        }
    </div>
  )
}

const UpdateUser = ({id , commingName , commingEmail , updateUserData})=>{
    const [name , setName] = useState(commingName)
    const [email ,setEmail] = useState(commingEmail)
   return(
     <>
        <form>
        <input type='text' name='title' id ='title' value={name} onChange={(e) =>{setName(e.target.value)}}/>
        <input type='text' name='email' id ='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <button type='button' onClick={(e)=>updateUserData(id,name,email)}>Update</button>
        </form>
     </>
   )

}

export default UseReducerExample3