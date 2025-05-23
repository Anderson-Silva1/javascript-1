let velocity = 110
let acceleration = 5

do {
    console.log(`Acelerando: estamos a ${velocity} km/s`)
    velocity += acceleration
} while(velocity <= 100)

// Acelerando: estamos a 110 km/s


// Foi retornado a velocidade de 110km/s, porém o máximo que poderia ter é de 100km/s...
// Isso acontece pq o DO-WHILE execulta o código pelo menos uma vêz antes de verificar a condição