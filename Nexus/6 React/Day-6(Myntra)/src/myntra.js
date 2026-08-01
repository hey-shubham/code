import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import arr from "./utils/dummy";

function App(){

    let [A, setA] = useState(arr);

    function sortArray(){
        A.sort((a,b)=>a.price-b.price);
        setA([...A]);
    }

   return(<>
    <Header/> 
    <button onClick={sortArray} className="sortbtn">Sort by Price</button>
    <div className="middle" style={{display:"flex" , gap:"10px", flexWrap:"wrap"}}>
    {
        A.map((value,index)=>  (
        <Card
        key={index}
        cloth={value.cloth}
        offer={value.offer}
        price={value.price}
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