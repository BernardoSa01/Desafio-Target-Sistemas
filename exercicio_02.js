// Definindo os dois primeiros números da sequência de Fibonacci
let firstNumber = 0
let secondNumber = 1

// Número a ser verificado
let typedNumber = 65

// Definindo a variável que representará o próximo número da sequência
let nextNumber

let isFibonacci = false

/* Criando loop com a verificação:
   Se o 'firstNumber' for igual ao 'typedNumber',
   o número faz parte da sequência de Fibonacci.
*/
while (firstNumber <= typedNumber) {
  if (firstNumber === typedNumber) {
    isFibonacci = true
    break
  }

  nextNumber = firstNumber + secondNumber

  firstNumber = secondNumber
  secondNumber = nextNumber
}

// Condicional para exibir no console o resultado final
if (isFibonacci) {
  console.log(`${typedNumber} pertence à sequência de Fibonacci`)
} else {
  console.log(`${typedNumber} não pertence à sequência de Fibonacci`)
}