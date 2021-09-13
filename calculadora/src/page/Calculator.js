import { 
    DivButtons, CalculatorContainer, Operators, Screen, FirstLine, SecondLine, NumberButton, 
    OperatorButton, Result, ResultButton, ClearButton, ConvertAndClear, ConvertButtons, SendResult 
} from "./styled";
import { useState } from "react";
import finalResult from "../functions/finalResult";
import sendResult from "../functions/sendResult";

const Calculator = () => {

    const [operation, setOperation] = useState("")
    const [result, setResult] = useState("")

    const simbols = ['+', '-', '/', '*']

    const updateOperation = (value) => {
        if (
            simbols.includes(value) && operation === "" ||
            simbols.includes(value) && simbols.includes(operation.slice(-1))
        ) {
            return;
        }
        
        setOperation(operation + value)

        if (!simbols.includes(value)) {
            setResult(eval(operation + value))
        }
    }

    const calculateFinalResult = () => {
        setOperation(finalResult(operation))
    }

    const toDec = () => {
        const octal = finalResult(operation)
        const dec = parseInt(octal, 8)
        alert(`Este restultado em decimal é ${dec}`)
    }

    const toBin = () => {
        const octal = finalResult(operation)
        const dec = parseInt(octal, 8)
        const bin = dec.toString(2)
        alert(`Este restultado em decimal é ${bin}`)
    }
    
    const clear = () => {
        setOperation('')
    }

    return (
        <CalculatorContainer>
            <Screen>
                {operation || "0"}
            </Screen>
            <ConvertAndClear>
                <ConvertButtons onClick={toDec}>Resultado em Decimal</ConvertButtons>
                <ConvertButtons onClick={toBin}>Resultado em Binário</ConvertButtons>
                <ClearButton onClick={clear}>CE</ClearButton>
            </ConvertAndClear>
            <DivButtons>
                <FirstLine>
                    <NumberButton onClick={() => updateOperation('0')}>0</NumberButton>
                    <NumberButton onClick={() => updateOperation('1')}>1</NumberButton>
                    <NumberButton onClick={() => updateOperation('2')}>2</NumberButton>
                    <NumberButton onClick={() => updateOperation('3')}>3</NumberButton>
                </FirstLine>
                <SecondLine>
                    <NumberButton onClick={() => updateOperation('4')}>4</NumberButton>
                    <NumberButton onClick={() => updateOperation('5')}>5</NumberButton>
                    <NumberButton onClick={() => updateOperation('6')}>6</NumberButton>
                    <NumberButton onClick={() => updateOperation('7')}>7</NumberButton>
                </SecondLine>
                <Operators>
                    <OperatorButton onClick={() => updateOperation('+')}>+</OperatorButton>
                    <OperatorButton onClick={() => updateOperation('-')}>-</OperatorButton>
                    <OperatorButton onClick={() => updateOperation('/')}>/</OperatorButton>
                    <OperatorButton onClick={() => updateOperation('*')}>x</OperatorButton>
                </Operators>
            </DivButtons>
            <Result>
                <ResultButton onClick={calculateFinalResult}>=</ResultButton>
                <SendResult onClick={() => sendResult(operation)}>enviar resultado</SendResult>
            </Result> 
        </CalculatorContainer>
    )
}

export default Calculator
