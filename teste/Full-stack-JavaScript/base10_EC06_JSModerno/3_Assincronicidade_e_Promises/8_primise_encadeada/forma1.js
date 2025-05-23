const carro = {
    modelo: "Camaro", // Modelo do carro
    totalGasolina: 50, // Total da capacidade do tanque do carro em LITROS
    consumoLitroPorKmH: 0.5 // Consumo de gasolina por Km em uma hora
}

// Função para atualizar gasolina atual
function atualizandoTanqueGasolina(consumoGasolina /* Recebe o consumo da gasolina calculada pela função "consumoGasolina" */){
    return new Promise((resolve, reject) => {
        carro.totalGasolina -= consumoGasolina // Tira o consumo do tanque de gasolina total

        if ( carro.totalGasolina > 0 /* Verifica se o carro tem gasolina */) {
            resolve(carro.totalGasolina) // Se tiver, envia a quantidade em LITROS parao "resolve"
        } else {
            reject('O carro está sem gasolina, abastecê-lo o quanto antes') // Se não tiver gasolina, envia para o "reject"
        }
    })
}

// Função para caucular o consumo de gasolina
function consumoGasolina(quilometros /* KM percorrido */, hora /* Tempo em HORAS andado */){
    return new Promise((resolve, reject) => {
        if ( quilometros <= 0 || hora <= 0 /* Verifica de o tempo e a distância são válidas para manter o carro andando */ ){
            reject("O carro está parado") // Caso não seja válido, será enviado ao "reject"
        } else {
            let calculoConsumo = carro.consumoLitroPorKmH * quilometros * hora // Caucula o consumo da gasolina
            resolve(calculoConsumo) // Envia o consumo para o "resolve"
        }
    })
}

consumoGasolina(10, 10)/* Chamamos a FUNÇÃO "consumoGasolina" para calcular o consumo da gasolina */.then /* Caso o resultado tenha vindo do "resolve", nós mandamos esse resultado como parâmtro da Função "atualizandoTanqueGasolina" */(gasolinaConsumida => {
    atualizandoTanqueGasolina(gasolinaConsumida)/* // Aqui dentro nós atualizamos a gasolina do nosso carro */.then /* Se quando a função atualizandoTanqueGasolina for execultada, e o carro tiver gasolina, ele será mandado como "resolve" */ (gasolinaAtual => {
        console.log(gasolinaAtual)
    }).catch /* Se quando a função atualizandoTanqueGasolina for execultada, e o carro ficar sem gasolina, ele será mandado como "reject" */ (semGasolina => {
        console.log(semGasolina)
    })
}).catch(reject => {
    console.log(reject)
})


// Colocamos uma Promise dentro de outra... E acaba se tornando um código macarrônico, caso tenhamos mais de duas Promise's