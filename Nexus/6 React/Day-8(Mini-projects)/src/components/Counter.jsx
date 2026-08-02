import { useState, useEffect } from "react";

function Counter(){
     
    const [count,setCount] = useState(0);

    return(
        <>
        <div className="counter">
        <h1>Count: {count}</h1>
        <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:"rebeccapurple"}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}} style={{backgroundColor:"rebeccapurple"}}>Decrement</button>
        </div>
        </>
    )

};

export default Counter;