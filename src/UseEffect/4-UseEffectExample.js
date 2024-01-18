import React, { useEffect, useState } from 'react'
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const UseEffect = () => {

  const [drinksData ,setDrinksData] = useState([])
  const [searchTerm ,setSearchTerm] = useState("")
  const [isLoading ,setIsLoading] = useState(false)
  const [error ,setError] = useState({
    status:false,
    msg :''
  })


  const fetchDrinks = async (apiCall) =>{
    try {
      setIsLoading(true)
      setError({
        status:false,
        msg : ''
      })
      const response = await fetch(apiCall);
    const {drinks} =  await response.json();
    console.log(drinks);
    setDrinksData(drinks)
    setIsLoading(false)
    if(!drinks){
       throw new Error('data not found')
    }
      
    } catch (error) {
        setIsLoading(false)
        setError({
          status:true,
          msg : error.message || 'page not found'
        })
    }
  }

  useEffect(()=>{
    const correctedURL = `${URL}${searchTerm}`
    console.log(correctedURL);
       fetchDrinks(correctedURL)
  },[searchTerm])

  return (
    <div>
      <input
        type='text'
        name='search'
        id='search'
        value={searchTerm}
        placeholder='Search for a drink'
        onChange={(e)  => setSearchTerm(e.target.value)}
      />
      <hr></hr>

      {
        error?.status  &&
        <strong style={{color:'red'}}>{error.msg}</strong>
      }
      {
        isLoading && !error?.status  && <strong>Loading....</strong>
      }
      {
        !isLoading && !error?.status  &&<ul className='cocktail-data '>        {
          drinksData.map((eachDrink)=>{
            const {idDrink,strDrink,strDrinkThumb} = eachDrink;
            return(
                 <li key={idDrink}>
                  <div>
                    <img src={strDrinkThumb} alt='Str Drink'></img>
                    </div>
                    <div className='text'>
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