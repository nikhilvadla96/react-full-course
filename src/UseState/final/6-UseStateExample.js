import React, { useState } from 'react'

const Index = () => {

    const [list ,setList] = useState([])
    
    const [message,setmessage] = useState({
        text:'',
        id:''
    })


    const changeMessage =(e) =>{
    setmessage({
        ...message,
        text : e.target.value
    })
    }

    const saveList = (e)=>{
         e.preventDefault()
         let newToDo ={
            text:message.text,
            id: new Date().getTime().toString(),
         };
         setList([...list,newToDo])
         setmessage(
            {
                id:'',
                text:''
            }
         )
    }

    const deleteRecord=(e,deleteId)=>{
      const filterList = list.filter((eachList)=>{
           return eachList.id !== deleteId;
      })
      setList(filterList)
    }
  return (
    <div>
        <form>
            <input
              type='text'
              name='message'
              id='message'
              placeholder='Enter some text'
              value={message.text}
              onChange={changeMessage}
            />
            <button type='submit' onClick={saveList}>Add</button>
        </form>
        <hr/>
        {
            list.length === 0 &&  <h3>There is no records</h3>
        }
        <ul>
            {
                list.map((eachObj) =>{
                    const {text,id} = eachObj;
                    console.log(eachObj);
                 return(
                    <li key={id}>
                      <span>{text}</span>
                      <button>Edit</button>
                      <button onClick={(e)=>deleteRecord(e,id)}>Delete</button>
                    </li>
                 )
                })
            }
        </ul>
    </div>
  )
}

export default Index