// Criando a função para reverter strings
function reverseString(string) {
  let reversedString =  ''

/* Aplicando um for para percorrer toda a string, 
   e mostrar os caracteres de trás para frente
*/
  for (let i = string.length -1; i >= 0; i--) {
    reversedString += string[i]
  }

  return reversedString
}

let string = '12345678'
let string2 = 'Engenharia de Software'

console.log(`String original: ${string}`)
console.log(`String invertida: ${reverseString(string)}`)

console.log(`String original: ${string2}`)
console.log(`String invertida: ${reverseString(string2)}`)