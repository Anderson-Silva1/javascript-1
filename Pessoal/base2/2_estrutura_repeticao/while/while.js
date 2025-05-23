// Looping infinito

// while(true){
//     console.log("Teste")
// }

let count = 1

while(count <= 10){
    console.log(count)
    count++
}

// Criando um looping infinito até escrever a palavra "sair"
let sair = prompt("> ").toLowerCase()

while(sair !== "sair"){
    console.log(sair)
    sair = prompt("> ").toLowerCase()
}

console.log('Saindo do loop')