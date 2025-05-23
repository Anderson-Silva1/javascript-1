// new Promise((resolve, reject) => {
//     resolve(console.log('Correto'))
// })

// new Promise((resolve, reject) => {
//     // s d
//     reject(console.log('Error'))
// })

const nave = {
    nome: "Star",
    velocity: 0,
    aceleration: 10
}

function aceleration(velocity, aceleration){
    setInterval(() => {
        new Promise(function ( resolve, reject ) {
            if (aceleration > 0) {
                velocity += aceleration * 2
                console.log('Nova velocidade: ' + velocity)
                resolve(velocity)
            } else {
                console.log('Aceleração inválida')
                reject("Não possui aceletação")
            }
        })
    }, 2000)
}

aceleration(nave.velocity, nave.aceleration)