import React from "react"


const ImageComponent = () =>{
    return <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="netflix childrern"></img>

}

const MoveComponent= () =>{

  return (
    <>
    <ImageComponent/>
    <TitleComponent/>
    </>
  )
}


const TitleComponent= () =>{
    const Styles ={
        heading:{
            color:"red",
            fontSize:"16px"

        }
    }

    return( <h1 style={{color:"green" , fontSize:"16px"}}>Create profiles for kids
      <span style={Styles.heading}> zxgfc</span>
      <h3>xdfgxtrff</h3></h1>
    )
  }

const Components = () =>{
    return ( <>
    <div className="movie-container">
    <MoveComponent/>
           <MoveComponent/>
           </div>
           </>)
}
export default Components