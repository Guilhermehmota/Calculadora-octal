import axios from "axios";
import { DivButtons, CalculatorContainer, Operators, Screen, FirstLine, SecondLine, NumberButton, OperatorButton, Result, ResultButton, ClearButton } from "./styled";
import { useState } from "react";


const Calculator = () => {

    const [operation, setOperation] = useState("")

    const [result, setResult] = useState("")

    const operators = ['+', '-', '/', '*']

    const updateOperation = (value) => {
        if(
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

    const finalResult = () => {
        setOperation(eval(operation).toString())
    }

    const clear = () => {
        setOperation('')
    }



    // let c = 0o11;

    // console.log(c)

    // const toOctal = (n) => {
    //     const result = n.toString(2)
    //     console.log(result)
    // }

    // const somaOctal = (n1, n2) => {

    //     const o1 = n1.toString(8)

    //     const o2 = n2.toString(8)

    //     const result = Number(o1) + Number(o2)

    //     console.log(result.toString(8))
    // }

    // somaOctal(52, 36)

    // toOctal(9)

    return (

        <CalculatorContainer>

            <Screen>
                {operation || "0"}
            </Screen>
            <ClearButton onClick={clear}>limpar painel</ClearButton>
            <DivButtons>
                <FirstLine>
                    <NumberButton onClick={()=> updateOperation('0')}>0</NumberButton>
                    <NumberButton onClick={()=> updateOperation('1')}>1</NumberButton>
                    <NumberButton onClick={()=> updateOperation('2')}>2</NumberButton>
                    <NumberButton onClick={()=> updateOperation('3')}>3</NumberButton>
                </FirstLine>
                <SecondLine>
                    <NumberButton onClick={()=> updateOperation('4')}>4</NumberButton>
                    <NumberButton onClick={()=> updateOperation('5')}>5</NumberButton>
                    <NumberButton onClick={()=> updateOperation('6')}>6</NumberButton>
                    <NumberButton onClick={()=> updateOperation('7')}>7</NumberButton>
                </SecondLine>
                <Operators>
                    <OperatorButton onClick={()=> updateOperation('+')}>+</OperatorButton>
                    <OperatorButton onClick={()=> updateOperation('-')}>-</OperatorButton>
                    <OperatorButton onClick={()=> updateOperation('/')}>/</OperatorButton>
                    <OperatorButton onClick={()=> updateOperation('*')}>x</OperatorButton>
                </Operators>

            </DivButtons>
            <Result>
                <ResultButton onClick={finalResult}>=</ResultButton>
                <ResultButton>enviar resultado</ResultButton>
            </Result>

        </CalculatorContainer>
    )
}

export default Calculator