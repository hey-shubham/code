import React from "react";
import ReactDOM from "react-dom/client"

function Greet(props){
    return <h1>Hello World..!! {props.name} {props.age}</h1>
}

const element = <Greet name="Shubham" age="22"/>

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(element);