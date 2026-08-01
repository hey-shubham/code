import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import arr from "./utils/dummy";

function App(){
   return(<>
    <Header/> 
    <div className="middle" style={{display:"flex" , gap:"10px", flexWrap:"wrap"}}>
    {
        arr.map((value,index)=>  (
        <Card
        key={index}
        cloth={value.cloth}
        offer={value.offer}
        />
    ))
    }
    </div>
    <Footer/>
    </>
   ) 
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);