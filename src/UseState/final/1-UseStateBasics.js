import { useState } from "react";

const Index =()=>{
    const [count , setCount] = useState(0);
    const add = (e,val)=>{
        setCount((prevCount) => prevCount+1)
        setCount((prevCount) => prevCount+1)
    }
    const sub = (e,val)=>{
        setCount(count-val)
     }
    return(
        <div style={{textAlign:"center"}}>
            <button type="submit" onClick={(e)=>sub(e,1)}>-</button>
            <span>{count}</span>
            <button type="submit" onClick={(e)=>add(e,1)}>+</button>
        </div>
    )
}
export default Index