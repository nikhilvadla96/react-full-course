import React, { useState } from 'react'

const Index = () => {

    const [list ,setList] = useState([])
    
    const [message,setmessage] = useState({
        text:'',
        id:''
    })

    const [editingItem,setEditItem] = useState({
      id:'',
      isEdit:false
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

    const editData=(e,editId)=>{
      console.log( editId);
      setEditItem({
        ...editingItem,
        id:editId,
        isEdit:true
      })
      let editableItem = list.find((eachItem)=>{
        return eachItem.id === editId
      })
      setmessage({
        ...message,
        id:editableItem.id,
        text:editableItem.text
      })
    }

    const handleEdit=(e)=>{
      e.preventDefault();
      console.log("prev",list);
      let newToDo =list.map((eachList)=>{
        if(eachList.id===editingItem.id){
            return {
              id:message.id,
              text:message.text
            }
        }else{
          return eachList
        }
      })
      console.log('crnt',newToDo);
      setList(newToDo)
      setmessage(
        {
            id:'',
            text:''
        }
     )
     setEditItem({
      id:'',
      isEdit:false
    })

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
            {
              editingItem.isEdit ?
              <button type='submit' onClick={handleEdit}>Edit</button>
              :
              <button type='submit' onClick={saveList}>Add</button>
            }
        </form>
        <hr/>
        {
            list.length === 0 &&  <h3>There is no records</h3>
        }
        <ul>
            {
                list.map((eachObj) =>{
                    const {text,id} = eachObj;
                 return(
                    <li key={id}>
                      <span>{text}</span>
                      <button onClick={(e)=>editData(e,id)}>Edit</button>
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