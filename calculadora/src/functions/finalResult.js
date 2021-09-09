
const finalResult = (operation) => {
    const splittedNumbers = /[\+\-\*\/]/
    const octals = operation.split(splittedNumbers)
    const splittedSignals = /[\d]/
    const signals = operation.split(splittedSignals)
    const correctedSignals = signals.filter(signal => {
        return signal !== ''
        //tirar os espaços que estavam no início e no final
    })
    
    //map para converter cada um dos numeros octais em decimais
    const decimals = octals.map((octal) => {
        return parseInt(octal, 8)
    })

    let decimalResult = decimals[0]
    // for each para sempre fazer a operação correta em relação ao número anterior
    correctedSignals.forEach((signal, index) => {
        switch (signal) {
            case "+":
                decimalResult += decimals[index + 1]
                break
            case "-":
                decimalResult -= decimals[index + 1]
                break
            case "/":
                decimalResult /= decimals[index + 1]
                break
            case "*":
                decimalResult *= decimals[index + 1]
                break
            default: break
        }
    })

    // por fim realizo a conversão para octal
    const octalResult = decimalResult.toString(8)
    return octalResult

}

export default finalResult
