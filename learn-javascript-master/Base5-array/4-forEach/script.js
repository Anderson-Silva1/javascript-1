const studants = [
    ["Anderson", 19],
    ["Rafaela", 23],
    ["Emanoel", 11],
    ["Jonas", 49],
    ["Jonas", 45.9]
]

// O For Each usa 3 parâmetros

studants.forEach( (studant /* O primeiro parâmetro sendo o ítem de um Array */) => {
    console.log(studant)
} ) 

studants.forEach( (studant, index /* O segundo parâmetro sendo o indice do ítem de um Array */) => {
    console.log(index)
} )

studants.forEach( (studant, index, array /* O terceiro parâmetro sendo o Array */) => {
    console.log(array)
} ) 

// Pegando a média de idade dos estudantes

let media = 0

studants.forEach((studant, index, array) =>{
    media += studant[1]
})

console.log(media)
console.log(studants.length)
console.log(Math.round(media/studants.length))