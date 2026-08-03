import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import PasswordGenerator from "./components/PasswordGen";

function Main(){

    return (
        <PasswordGenerator/>
    )
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main/>);
