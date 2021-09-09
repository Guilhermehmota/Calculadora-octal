import styled from "styled-components";
import { darkColor, lighColor, primaryColor, secondaryColor } from "../constants/colors";

export const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 5px ${darkColor};
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    height: 350px;
    overflow: hidden;
`
export const Screen = styled.div`
    text-align: right;
    padding: 10px;
    font-size: 24px;
    background-color:${darkColor};
    color: ${lighColor};
    `
export const ConvertAndClear = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    `

export const ConvertButtons = styled.button`
    background-color: yellow;
    appearance: none;
    border: none;
    outline: none;
    font-size: 14px;
    background-color:${secondaryColor};
    cursor: pointer;
    :hover{
        opacity: 0.9;
    }
`
export const ClearButton = styled.button`
    appearance: none;
    border: none;
    outline: none;
    flex-grow: 1;
    font-size: 16px;
    background-color:${primaryColor};
    cursor: pointer;
    :hover{
        opacity: 0.9;
    }
`
export const DivButtons = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
`
export const FirstLine = styled.div`
    height: 33%;
    width: 100%;
`
export const SecondLine = styled.div`
    height: 33%;
    width: 100%;
`
export const Operators = styled.div`
    height: 33%;
    width: 100%;
`
export const NumberButton = styled.button`
    width: 25%;
    height: 100%;
    appearance: none;
    border: none;
    outline: none;
    background-color:${darkColor};
    color: ${lighColor};
    font-size: 18px;
    cursor: pointer;
    :hover{
        opacity: 0.9;
    }
`
export const OperatorButton = styled.button`
    width: 25%;
    height: 100%;
    appearance: none;
    border: none;
    outline: none;
    background-color:${darkColor};
    color: ${lighColor};
    font-size: 18px;
    cursor: pointer;
    :hover{
        opacity: 0.9;
    }
`
export const Result = styled.div`
    display: flex;
    flex-direction: column;
    height: 75px;
    width: 100%; 
`
export const ResultButton = styled.button`
    width: 100%;
    height: 50%;
    appearance: none;
    border: none;
    outline: none;
    background-color:${darkColor};
    color: ${lighColor};
    font-size: 18px;
    cursor: pointer;
    :hover{
        opacity: 0.9;
    }
`
export const SendResult = styled.button`
    width: 100%;
    height: 50%;
    appearance: none;
    border: none;
    outline: none;
    background-color:${secondaryColor};
    font-size: 14px;
    cursor: pointer;
    :hover{
        opacity: 0.9;
    }
`