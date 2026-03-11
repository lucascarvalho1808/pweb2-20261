function calculadora(numero1, numero2, operador) {
    let resultado

    switch (operador) {
        case '+':
            resultado = numero1 + numero2
            break

        case '-':
            resultado = numero1 - numero2
            break

        case '*':
            resultado = numero1 * numero2
            break
        
        case '/':
            resultado = numero1 / numero2
            break

        default:
            resultado = 'Operação inválida'
    }

    return resultado

}

export default calculadora