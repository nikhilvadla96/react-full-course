import React, { useReducer } from 'react'

const UseReducerExample = () => {

    const initialObj = {
        data:[
            {id :123 , name :'Srikanth' , email :'sri@gmail.com'},
            {id :986 , name :'Ram' , email :'ram@gmail.com'},
        ],
        length:2
    }

  const [state , dispatcher] = useReducer(reducer , initialObj)

  const handleDelete =(id)=>{
      dispatcher({
        type : "HANDLE_DELETE",
        payload : id
      })
  }

  const handleEdit =(id)=>{
    dispatcher({
        type : "HANDLE_Edit",
        payload : id
      })
  }

  return (
    <div>
        <strong>Length on the Data : {state.length}</strong>
          {
              state.data.map((eachData) =>{
                const {id , name , email} = eachData
                return(
                    <div key={id}>
                    <strong>Name : {name}</strong>
                    <p>Email : {email}</p>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                    <button onClick={() =>handleEdit(id)}>Edit</button>
                    </div>
                )
            
              })
          }
    </div>
  )
}

const reducer = (state ,action ) =>{
    if (action.type === 'HANDLE_DELETE'){
        const new_Data = state.data.filter((eachState) =>{
            return eachState.id !== action.payload
        })
        return{
            ...state,
            data: new_Data ,
            length: state.length-1
        }
    }
   
    return state
}

export default UseReducerExample