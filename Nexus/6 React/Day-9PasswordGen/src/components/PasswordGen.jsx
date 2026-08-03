import {useEffect, useState} from "react";

function PasswordGenerator(){

    const [Password,setPassword] = useState("");
    const [Length,setLength] = useState(8);
    const [numberChanged,setnumerChanged] = useState(false);
    const [charChanged,setcharChanged] = useState(false);

    function generatepassword() {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberChanged) {
        str += "0123456789";
    }

    if (charChanged) {
        str += "@#$&_-=";
    }

    let pass = "";

    for (let i = 0; i < Length; i++) {
        pass+= str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
};

    useEffect(()=>{
        generatepassword();
    },[Length,numberChanged,charChanged]);

    return (
        <>
            <h1>Password is: {Password}</h1>
            <div className="second">
                <input type="range" min={5} max={50} value={Length} onChange={(e)=>setLength(e.target.value)}></input>
                <label>Length is: ({Length})</label>

                <input type="checkbox" defaultChecked={numberChanged} onClick={()=>setnumerChanged(!numberChanged)}></input>
                <label>Number</label>

                <input type="checkbox" defaultChecked={charChanged} onClick={()=>setcharChanged(!charChanged)}></input>
                <label>Character</label>
            </div>
    
        </>
    )
}

export default PasswordGenerator;