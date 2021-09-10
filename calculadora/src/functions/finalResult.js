
const finalResult = (operation) => {

    const splittedNumbers = /[\+\-\*\/]/
    const octals = operation.split(splittedNumbers)
    const splittedSignals = /[\d]/
    const signals = operation.split(splittedSignals)
        
    const correctedSignals = signals.filter(signal => {
        return signal !== ''    
    })

    const decimals = octals.map((octal) => {
        return parseInt(octal, 8)
    })

    let decimalResult = decimals[0]
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
    
    const octalResult = decimalResult.toString(8)

    return octalResult
}

export default finalResult
