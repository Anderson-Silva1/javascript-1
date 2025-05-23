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

function loudAmmo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Arma carregada')
        }, 3000);
    })
}

async function moveAndFire(x, y, z){
    try {

        let ajustPositionPromise = adjustPosition(x, y, z) 
        let loudAmmoPromise = loudAmmo()

        let promiseResult = await Promise.all([ajustPositionPromise, loudAmmoPromise]).then() // Usando o

        let newCoordinates = promiseResult[0]
        console.log(`Arma ajustada para as cordenadas: (${newCoordinates[0]}, ${newCoordinates[1]}, ${newCoordinates[2]})`)
        let fireCoords = await fire(...newCoordinates)
        console.log(`Começando a atirar nas coordenadas (${fireCoords[0]}, ${fireCoords[1]}, ${fireCoords[2]})`)
    } catch (error) {
        console.log(error)
    }

}

moveAndFire(40, 10, 90)
