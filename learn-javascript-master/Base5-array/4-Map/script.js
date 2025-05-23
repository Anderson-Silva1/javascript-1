// O MAP vai receber 3 Parâmetros
// 1 - O ítem do Array
// 2 - O índex dpo Array
// 3 - O Array completo

const numbers = [ 1,2,3,4]
const studants = [
    ["Anderson", 19],
    ["Rafaela", 24],
    ["Tanael", 21],
    ["Emanoel", 12],
    ["Talia", 22],
    ["João", 69],
]

// Como o MAP cria um novo Array do mesmo tamanho do Array de origem, precisamos criar uma nova variável para ela...

// const newNumbers = numbers.map( (number, index, array) => {
//     return number
// })

const newNumbers = numbers.map( (number, index, array) => {
    return number * 2 // O resulktado será um array com os numeros: [2,4,6,8], pois é cada ítem do Array "numbers" multiplicado por 2
})

console.log(newNumbers)


// Outro exemplo

const newStudants = studants.map( (studant, index, array) => {
    const newStudant = [studant[0] = studant[0] + " da silva", studant[1] = studant[1 - 2]]
    return newStudant
})

console.log(newStudants)