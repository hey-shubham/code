import React from "react";
import ReactDOM from "react-dom/client"

const element1 = React.createElement("h1",{id:"first", className:"Shubham",style:{backgroundColor:"skyblue", color:"white"}},"React..");
const element2 = React.createElement("h3",{id:"first", className:"Shubham",style:{backgroundColor:"green", color:"white"}},"Hello World..!!");

const div1 = React.createElement('div',{},element1,element2);

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(div1);