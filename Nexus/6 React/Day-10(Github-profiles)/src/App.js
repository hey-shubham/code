import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FetchAPI from "./components/FetchAPI"


function App(){

    return(
        <>
            <Header/>
            <FetchAPI/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);