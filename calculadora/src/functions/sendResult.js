import axios from "axios";

const sendResult = async(operation) => {
    try {
        const phoneNumber = Number(prompt("Digite um número de telefone com DDD"))
        await axios.get(`https://ws.appclientefiel.com.br/rest/comum/EnviarWhats/${phoneNumber}/Calculadora/${operation}`)
        alert("Resultado enviado para seu telefone")
    } catch (error) {
        alert(error.message)
    }
}

export default sendResult