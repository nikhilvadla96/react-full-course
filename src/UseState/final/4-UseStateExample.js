import React, { useState } from 'react'

const Index = () => {
    const[showData , setShowData] =useState(false)

    function handlechange(){
       setShowData(!showData)
    }

  return (
    <div>
        <button onClick={handlechange}>{showData ? 'Hide' :'Show'}</button>
        {
            showData &&
            <p>lorem 20kj.jsezdfdh;ow o;j.eziodsj;O</p>

        }
        {
            !showData &&
            <div>Data Hidden</div>
        }
    </div>
  )
}

export default Index