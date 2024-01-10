import React from "react"
import './index.css'

let a = <a href="https://www.adda247.com/te/tspsc-assistant-motor-vehicle-inspector/" target="_blank">https://www.adda247.com/te/tspsc-assistant-motor-vehicle-inspector/</a>
let temArray = [<h1>Mango</h1>,<h1>Berries</h1>]


const data  =[
    {
        title:'NetFlix 1',
        imgURL:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png',
        description:'Watch everywhere Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
    },
    {
        title:'NetFlix 2',
        imgURL:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
        description:'Download your shows to watch offline Save your favourites easily and always have something to watch.'
    }
]

let newTemArray = data.map((eachArray) =>{
    return (
        <article>
            <img src={eachArray.imgURL} alt={eachArray.imgURL}/>
            <h1>{eachArray.title}</h1>
            <p>{eachArray.description}</p>
        </article>
    )
})


const Props =() =>{
     return(
        <section>
            {
                data.map((eachObj,index)=>{
                    const{imgURL,title,description} = eachObj
                  return <Movie key={index} imgURL={imgURL}
                           title={title}
                           description={description}/>
                })
            }
        </section>
     )
}
const Movie =(props) =>{
    const {imgURL,title,description} = props
    return(
        <article className="">
            <img src={imgURL} alt="Movie"></img>
            <h1 className="">{title || 'No Title'}</h1> <b>{props.firstName}</b>
            <p>{description}</p>
        </article>
    )
}

function getData(userObj){
   const {firstName,lastName} = userObj
   console.log(firstName)
   console.log(lastName)
}
getData(
    {firstName:"Emma",
    lastName: "Watson"})

export default Props
