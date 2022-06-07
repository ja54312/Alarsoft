import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/React/header/header";
import Body from "./src/React/body/body";
import Footer from "./src/React/footer/footer";
import './src/styles/base.css';


export default function App(){
  return(
    <>
       <Header></Header>
       <Body></Body>
       <Footer></Footer>
    
    </>
  )
}

const entryPointMalta = document.getElementById("root");
ReactDOM.render(<App/>, entryPointMalta);