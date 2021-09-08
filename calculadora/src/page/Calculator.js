import React from "react";
import axios from "axios";
import { DivButtons, CalculatorContainer, Operators, Screen, FirstLine, SecondLine, NumberButton, OperatorButton, Result, ResultButton } from "./styled";

const Calculator = () => {


    // const toOctal = (n) => {
    //     const result = n.toString(8)
    //     console.log(result)
    // }

    const somaOctal = (n1, n2) => {

        const o1 = n1.toString(8)

        const o2 = n2.toString(8)

        const result = Number(o1) + Number(o2)

        console.log(result.toString(8))
    }

    somaOctal(11, 12)

    // toOctal(9)

    return (

        <CalculatorContainer>

            <Screen>
                0
            </Screen>

            <DivButtons>
                <FirstLine>
                    <NumberButton>0</NumberButton>
                    <NumberButton>1</NumberButton>
                    <NumberButton>2</NumberButton>
                    <NumberButton>3</NumberButton>
                </FirstLine>
                <SecondLine>
                    <NumberButton>4</NumberButton>
                    <NumberButton>5</NumberButton>
                    <NumberButton>6</NumberButton>
                    <NumberButton>7</NumberButton>
                </SecondLine>
                <Operators>
                    <OperatorButton>+</OperatorButton>
                    <OperatorButton>-</OperatorButton>
                    <OperatorButton>/</OperatorButton>
                    <OperatorButton>x</OperatorButton>
                </Operators>

            </DivButtons>
            <Result>
                <ResultButton>=</ResultButton>
                <ResultButton>enviar resultado</ResultButton>
            </Result>


        </CalculatorContainer>
    )
}

export default Calculator