import React, { useEffect, useState } from 'react'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const UseEffect = () => {

    const [drinksList , setDrinksList] = useState([]);
    const [drinkName , setDrinkName] = useState('')
    const [isLoading , setIsLoading] = useState(false)
    const [error,setError ] = useState({
        isError : false,
        msg: ''
    })

    const fetchDrinks = async (apiCall) =>{
        try {
            setIsLoading(true)
            setError({
                isError:false,
                msg:''
            })
            const response = await fetch(apiCall);
            console.log(response);
            const {drinks} = await response.json();
            console.log(drinks);
            setDrinksList(drinks)
            setIsLoading(false)
            if(!drinks){
                    throw new Error('data not found')
            }

        } catch (error) {
            setIsLoading(false)
            setError({
                isError:true,
                msg: error || 'page not found'
             } )
        }
    }

    useEffect(()=>{
        const completeURL = `${URL}${drinkName}`
       fetchDrinks(completeURL)
    },[drinkName])

  return (
    <div className=''>
        <input
          type='text'
          name=''
          id=''
          value={drinkName} 
          placeholder='Enter Drink Name'
          onChange={(e)=>setDrinkName(e.target.value)}
        />
        <hr></hr>
        {
            isLoading && !error?.isError &&
          
            <strong>
                Loading....
            </strong>
        
        }

         {
            error?.isError &&  
            <strong style={{color:'red'}}>{error.msg}</strong>
         }

        {
            !isLoading && !error?.isError &&
            <ul className='cocktail-data '>
            {
             drinksList.map((eachDrink) =>{
                const {idDrink,strDrink,strDrinkThumb} = eachDrink;
                return (<li key={idDrink}>
                <div>
                    <img src={strDrinkThumb} alt='Drink Image'/>
                </div>
                <div>
                    <strong>{strDrink}</strong>
                </div>
                </li>
                )
             })
            }
        </ul>
        }
    </div>
  )
}

export default UseEffect