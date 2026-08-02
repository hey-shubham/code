import { useState, useEffect } from "react";

function Color(){
     const [Color, setColor] = useState("black");

    useEffect(()=>{
        document.body.style.backgroundColor = Color;
    },[Color]);

    return(
        <>
            <h1>Background-Color Changer</h1>
            <div className="btns">
                <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
                <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
                <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
                <button style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
            </div>    
        </>       
    )
}

export default Color;