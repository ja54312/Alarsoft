import React from "react";
import ReactDOM from "react-dom";
import Prueba from "./src/React/components/prueba/prueba";
import './src/styles/base.css';


export default function App(){
  return(
    <>
      <Prueba/>
    </>
  )
}

const entryPointMalta = document.getElementById("root");
ReactDOM.render(<App/>, entryPointMalta);