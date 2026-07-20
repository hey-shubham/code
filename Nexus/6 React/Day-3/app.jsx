// JSX - Javascript XML
// It allows us to write HTML in React

import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1 id="first" className="Shubham" style={{backgroundColor:"skyblue", color:"white"}}>React..</h1>;
const element2 = <h3 id="first" className="Shubham" style={{backgroundColor:"green", color:"white"}}>Hello World..!!</h3>;

const div1 = <div>{element1}{element2}</div>;

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(div1);