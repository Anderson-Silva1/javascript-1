const incrementandoVelicidade = function(velocidadeIncrementada){
    return new Promise((resolve, reject) => {
        if (velocidadeIncrementada <= 0){
            reject("Frenagem acionada!")
        } else {
            resolve(velocidadeIncrementada * 0.9)
        }
    })
}

const multiplicacao = function(number1, number2){
    return new Promise((resolve, reject) => {
        if (number1 === 0 || number2 === 0) {
            reject('Não é possível multiplicar por 0 (zero)')
        } else {
            resolve(number1 * number2)
        }
    })
}

Promise.all([incrementandoVelicidade(20), multiplicacao(1, 3)]).then((resolve) => {
    console.log(resolve)
}).catch(reject => console.log(reject))