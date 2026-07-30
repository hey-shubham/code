import React from "react";
import ReactDOM from "react-dom/client"

function Card(props){
    return(
        <div style={{border:"3px Solid black",padding:"2px" ,backgroundColor:"#438A27"}}>
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMRprY3uhoDD__r_wQ2A3snO-FzZPsYQKmaG-2JH2S-_ntZlwwl9t2gZ6_llATmDDdylCfd1O7gwIYkTzWahIiKb4PvKRyoLCF0h5IJZUU" height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}


const arr = [{cloth:"T-Shirt",offer:"20-80%off"},{cloth:"Jeans",offer:"30-80%off"},{cloth:"Pant",offer:"50-60%off"},{cloth:"Kurta",offer:"40-50%off"},{cloth:"Pajama",offer:"20-80%off"},{cloth:"Blazer",offer:"10-80%off"},{cloth:"Blazer",offer:"10-80%off"},{cloth:"T-Shirt",offer:"70-80%off"},{cloth:"T-Shirt",offer:"40-70%off"}]


function App(){
   return(
    // header
    // Body
    <div style={{display:"flex" , gap:"10px", flexWrap:"wrap"}}>

    {/* ye method boht lengthy hai issiliye hm array ka use krte hai */}
    
    {/* <Card cloth="T-Shirt" offer="20-80%off"/>
    <Card cloth="Jeans" offer="30-80%off"/>
    <Card cloth="Pant" offer="50-60%off"/>
    <Card cloth="Kurta" offer="40-50%off"/>
    <Card cloth="Pajama" offer="20-80%off"/>
    <Card cloth="Blazer" offer="10-80%off"/>
    <Card cloth="T-Shirt" offer="70-80%off"/>
    <Card cloth="T-Shirt" offer="40-70%off"/> */}

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
    // Footer
   ) 
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);