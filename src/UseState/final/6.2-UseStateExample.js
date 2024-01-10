import React, { useState } from 'react'

const Index = () => {

    const [listOfCars,setListOfCars] = useState([])

    const[yourData,setYourData] = useState({
        carId :'',
        carName:''
    })

    const [editCar,setEditCar] = useState({
        id:'',
        editCar:false
    })

    const handleInputChanges =(e)=>{
        console.log(e.target.value);
        setYourData({
            ...yourData,
            carName :e.target.value
        })
    }

    const saveThecars =(e)=>{
        e.preventDefault();
        let newCarsList ={
            carId:new Date(),
            carName:yourData.carName
        }
        setListOfCars([...listOfCars,newCarsList])
        setYourData({
            carId:'',
            carName:''
        })
    }
    const editCarDetails =(carId)=>{
        setEditCar({
            ...editCar,
            id:carId,
            editCar:true
    })
     let selectedCar = listOfCars.find((eachCar)=>{
         return eachCar.carId === carId
     })
     
     setYourData({
        ...yourData,
        carId:selectedCar.carId,
        carName:selectedCar.carName
     })

    }
    const deleteCarFromFav =(carId)=>{
       const activeCars = listOfCars.filter((eachCars) =>{
        return eachCars.carId !== carId
       })
       setListOfCars(activeCars)
    }

    const editaparticularcar =(e)=>{
        e.preventDefault();
        let newcarslist = listOfCars.map((eachCar)=>{
            if(eachCar.carId === editCar.id){
                return{
                    carId:yourData.carId,
                    carName:yourData.carName
                }
            }else{
                 return eachCar
            }
        })
        setListOfCars(newcarslist)
        setYourData({
            carId:'',
            carName:''
        })
        setEditCar({
            id:'',
            editCar:false
        })

    }
  return (
    <div>
        <form>
        <label>Enter Car Name :</label><br></br>
        <input style={{width:'200px'}} type='text' name='data'
         id='data' placeholder='Enter Your Favourite Car Name'
         value={yourData.carName} onChange={handleInputChanges}>
         </input>
         { editCar.editCar ?
                 <button type='submit' onClick={(e)=>editaparticularcar(e)}>Edit car in Fav</button>
                 :
                 <button type='submit' onClick={saveThecars}>Add car in Fav</button>

         }
         </form>
         <header>
         <p>Favourite Cars List</p>
         </header>
         <ul>
         {
            listOfCars && listOfCars.length ===0 &&
            <p>There are no fovorite cars in feed</p>
         }
         </ul>
        
         <ul>
         {
            listOfCars.map((eachCar)=>{
              const {carId,carName}= eachCar
              return(
                <li>
                    <strong>{carName}</strong>
                    <button type='submit' onClick={(e)=>editCarDetails(carId)}>Edit</button>
                    <button type='submit' onClick={(e)=>deleteCarFromFav(carId)}>Delete</button>
                </li>
              )
            })
         }
         </ul>
    </div>
  )
}

export default Index