import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Color from "./components/Color";
import Counter from "./components/Counter";

function Main(){

    return(
        <>
        <Counter/>
        <Color/>
        </>
    )
   
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);