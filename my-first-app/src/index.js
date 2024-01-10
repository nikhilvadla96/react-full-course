import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App.js";
import Components from "./Components.js";  
import Props from"./props.js";
import PropsExample from "./PropsExample.js";
import PropsExample2 from "./PropsExample2.js";
import Events from "./Enevts.js";
import "./index.css"

/*function PrintName(){
     return <h1>Hello React</h1>
}*/

const PrintName = ()=> {
    return (
        <div>
    <h1>Hello Iam coming from Array function component</h1>
    
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PropsExample2/>)

/*setInterval(() =>{
    root.render(<Props/>)
},1000)*/


