let myCar = {
    name: "Corola",
    velocidade: 80,
    aceleracao: 0
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
}).catch(error => {
    console.log(`Message ERROR (catch): ${error}`) // Não possui aceleração => Mensagem de erro
})