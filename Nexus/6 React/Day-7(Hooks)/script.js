import React, {useState} from "react";
import ReactDOM from "react-dom/client"

function Counter(){
    let [count, setCount] = useState(0);

    function incremenNumber(){
        count = count+1;
        setCount(count);
        // document.querySelector('h1').innerText = `Count is: ${count}`;
    }

    function decrementNumber(){
        count = count-1;
        setCount(count);
        // document.querySelector('h1').innerText = `Count is: ${count}`;
    }

    return(
    <div className="first">
        <h1>Count is: {count}</h1>

        <div className="btns">
        <button onClick={incremenNumber}>Increment</button>
        <button onClick={decrementNumber}>Decrement</button>
        </div>
    </div>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<Counter/>);