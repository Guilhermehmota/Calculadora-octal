import React from "react";
import './App.css';
import "./index.css"
import Calculator from "./page/Calculator";
import { MainContainer } from "./styled";


const App = () => {
  return (
    <MainContainer>
      <Calculator/>
    </MainContainer>
  )
}

export default App
