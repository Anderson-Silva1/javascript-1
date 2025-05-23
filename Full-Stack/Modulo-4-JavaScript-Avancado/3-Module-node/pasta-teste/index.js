const name = require("./dado1")
const profissao = require("./dado2")
const sum = require("./dado3")
const dado4 = require("./dado4")
// OU
const { persona1, persona2, mult } = require("./dado4")

console.log(name, profissao) // Usando dado 1 e 2

console.log(sum(10,5)); // Usando dado 3

console.log(dado4.persona1) // Usando dado 4
console.log(dado4.persona2) // Usando dado 4
console.log(dado4.mult(10,2)) // Usando dado 4

// OU

console.log(persona1) // Usando dado 4
console.log(persona2) // Usando dado 4
console.log(mult(15,2)) // Usando dado 4