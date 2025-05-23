let myCar = {
    name: "Corola",
    velocidade: 80,
    aceleracao: 10
}

function aceleracao(velocidade, aceleracao){
    new Promise((resolve, reject) => {
        if(aceleracao > 0){
            velocidade += aceleracao
            console.log('Aceleração válida')
            resolve(velocidade)
        } else {
            console.log('Aceleração inválida')
            reject('Não possui aceleração')
        }
    })
}

aceleracao(myCar.velocidade, myCar.aceleracao)