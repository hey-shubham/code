import React from "react";
import ReactDOM from "react-dom/client"; 

const element = <h1>Hello World..!!</h1>

function greet(name) {
   return <h1>Hello{name}</h1>;
}


const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(greet("  Shubham"));