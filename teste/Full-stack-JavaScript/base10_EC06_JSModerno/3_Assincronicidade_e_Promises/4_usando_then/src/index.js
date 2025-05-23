let myCar = {
    name: "Corola",
    velocidade: 80,
    aceleracao: 50
}

function aceleracao(velocidade, aceleracao){
    return new Promise((resolve, reject) => {
        if(aceleracao > 0){
            velocidade += aceleracao
            console.log('Aceleração válida... Estamos dentro da Promise')
            resolve(velocidade)
        } else {
            console.log('Aceleração inválida... Estamos dentro da Promise')
            reject('Não possui aceleração')
        }
    })
}

aceleracao(myCar.velocidade, myCar.aceleracao).then(velocidade => {
    console.log(velocidade + " Estamos no then")
    myCar.velocidade = velocidade
    console.log(myCar)
})

console.log(`Velocidade do carro ${myCar.name} é: ${myCar.velocidade}km/h... Estamos fora da Promise`)
console.log(myCar)
console.log(myCar)
console.log(myCar)
console.log(myCar)
console.log(myCar)
console.log(myCar)
// Imprimiu tudo isso acima


// E depois ele execultou o "then"


// Isso acontece pq a Promisse é assincrona, e como o código estava sendo execultado de forma sincrona ele esperou os console.log's terminarem para então imprimir a nova velocidade dentro do "then"