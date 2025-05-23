let hitchedSpaceship = ["Star", "Dark", "Heart"]

console.log(hitchedSpaceship)
console.log(hitchedSpaceship[0])
console.log(hitchedSpaceship[1])
console.log(hitchedSpaceship[2])

let spaceshipInfo = ["Stelar", 10, 300]

console.log(`\nA nave ${spaceshipInfo[0]} tem ${spaceshipInfo[1]} tripulantes e está a velocidade de ${spaceshipInfo[2]}km/s`)
// A nave Stelar tem 10 tripulantes e está a velocidade de 300km/s

// Vamos acessar um índice quem não existe
console.log(spaceshipInfo[3])

// Ele dará o valor "undefined", pois esse dado não existe


// Contrutores Array

let contructArray = new Array("Teste1","Teste2","Teste3","Teste4")
console.log(contructArray[0])

let contructArrayNumber = new Array(10)
console.log(contructArrayNumber) // Criou uma lista de 10 índices "undefined"