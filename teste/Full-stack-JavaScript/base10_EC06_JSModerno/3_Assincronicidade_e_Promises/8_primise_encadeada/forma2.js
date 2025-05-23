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



// Podemos retornar diretamente uma Promise dentro de outra:

// Chaamos nossa função para calcular o consumo de gasolina
consumoGasolina(5,5).then /* Esse "then" se refere a função "consumoGasolina", onde retorna como parâmetro o cálculo do consumo de gasolina */ (gasolinaConsumida => {
    return atualizandoTanqueGasolina(gasolinaConsumida) // Como sabemos que o then da função "consumoGasolina" vai ser usadocomo parâmetro da função "atualizandoTanqueGasolina", podemos usar diretamente desse forma... Retornando a própria função
}).then /* Esse then se refere a função "atualizandoTanqueGasolina" */ (gasolinaAtual => {
    console.log(gasolinaAtual)
}).catch /* Esse catch vai retornar todo e qualquer erro que qualquer uma das promise's envolvidas poderá retornar */ (error => {
    console.log(error)
})