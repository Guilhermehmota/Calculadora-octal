import axios from "axios";
import { DivButtons, CalculatorContainer, Operators, Screen, FirstLine, SecondLine, NumberButton, OperatorButton, Result, ResultButton, ClearButton } from "./styled";
import { useState } from "react";
import finalResult from "../functions/finalResult";

const Calculator = () => {

    const [operation, setOperation] = useState("")
    
    const [result, setResult] = useState("")

    const operators = ['+', '-', '/', '*']

    const updateOperation = (value) => {
        if (
            operators.includes(value) && operation === "" ||
            operators.includes(value) && operators.includes(operation.slice(-1))
        ) {
            return;
        }
        setOperation(operation + value)

        if (!operators.includes(value)) {
            setResult(eval(operation + value))
        }
    }

    const calculateFinalResult = () => {
        setOperation(finalResult(operation))
    }

    const clear = () => {
        setOperation('')
    }

    const sendResult = async() => {
        try {
            const phoneNumber = Number(prompt("Digite um número de telefone com DDD"))
            await axios.get(`https://ws.appclientefiel.com.br/rest/comum/EnviarWhats/${phoneNumber}/Calculadora/${operation}`)
            alert("Resultado enviado para seu telefone")
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <CalculatorContainer>

            <Screen>
                {operation || "0"}
            </Screen>
            <ClearButton onClick={clear}>limpar painel</ClearButton>
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
                <ResultButton onClick={sendResult}>enviar resultado</ResultButton>
            </Result>

        </CalculatorContainer>
    )
}

export default Calculator
