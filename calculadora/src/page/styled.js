import styled from "styled-components";

export const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 340px;
    height: 300px;

`
export const Screen = styled.div`
height: 50px;
text-align: right;
padding: 10px;
font-size: 24px;

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
background-color: grey;
display: flex;

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
`
export const OperatorButton = styled.button`
width: 25%;
height: 100%;
background-color: grey;
`
export const Result = styled.div`
display: flex;
flex-direction: column;
height: 50px;
width: 100%; 
`
export const ResultButton = styled.button`
width: 100%;
height: 50%;
`
export const ClearButton = styled.button`
width: 100%;
height: 10%;
`