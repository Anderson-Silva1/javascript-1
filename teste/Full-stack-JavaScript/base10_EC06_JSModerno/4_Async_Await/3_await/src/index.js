let lazerGun = {
    shotPerSeconds: 30,
    currentPosition: [30, 45, 70],
    firing: false
}

async function adjustPosition(x, y, z){

    if(z > 90){
        return Promise.reject("Ângulo inválido") // Gerando um erro na nossa função ASYNC
    }

    lazerGun.currentPosition = [x, y, z]
    return [x, y, z]
}

async function fire(x, y, z){
    lazerGun.firing = true
    return [x, y, z]
}

async function moveAndFire(x, y, z){

    let newCoordinates = await adjustPosition(x, y, z) // Vai esperar a execulção desse acabar para ir para a próxima linha

    console.log(`Arma ajustada para as cordenadas: (${newCoordinates[0]}, ${newCoordinates[1]}, ${newCoordinates[2]})`)

    let fireCoords = await fire(...newCoordinates) // Vai esperar a execulção desse acabar para ir para a próxima linha

    console.log(`Começando a atirar nas coordenadas (${fireCoords[0]}, ${fireCoords[1]}, ${fireCoords[2]})`)

}

moveAndFire(40, 10, 90)
