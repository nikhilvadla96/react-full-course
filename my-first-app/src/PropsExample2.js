import React from "react";
import {data,spl} from "./data"; 
import ListItems from "./PropsExample";
import image2 from "./assest/2.jpg"
console.log(spl);

const PropsExample2 = () =>{

    return(
        <main className="container">
            
            <ul className="comments-container">
                { data.map((eachComment)=>{
                    const{email,name,body,id} = eachComment;
                  return(
                    <ListItems key ={id} email={email}  name={name} body={body}/>
                  )
                  
                })}
            </ul>
        </main>
    )
}



export default PropsExample2