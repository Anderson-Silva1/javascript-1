// Estamos criando um afunção de soma que recebe 2 parâmetros: "number1" e "number2"
function sum( number1, number2 ){
    let sum = number1 + number2 // Estamos fazendo a soma desses parâmetros
    console.log(`A soma de ${number1} + ${number2} é: ${sum}`) // Estamos dando um console.log para o resultado dessa soma
    return sum // Estamos retornando o valor dessa soma
}

let number1 = 40 // Criamos duas variável, para serem referentes aos parâmetros da nossa função "sum()"
let number2 = 90

let resultado = sum(number1, number2) // Estamos atribuindo o resultado da nossa função "sum()" com os devidos parâmetros à variável "resultado"

console.log(resultado) // Estamos dando um console.log na nossa variável "resultado"

// Anderson, para que serve o Return então?... Ele serve para determinar um valor de retorno de uma função... Sem ela a variável "resultado" que tá recebendo o valor da função "sum()" seria "undefined" ou "indefinido", por não ter o "return"...




