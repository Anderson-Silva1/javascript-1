// COM PROMISE
let lazerGun = {
    shotPerSeconds: 30,
    currentPosition: [30, 45, 70],
    firing: false
}

function adjustPosition(x, y, z){
    return new Promise((resolve, reject) => {
        lazerGun.currentPosition = [x, y, z]
        resolve([x, y, z])
    })
}

function fire(x, y, z){
    return new Promise((resolve, reject) => {
        lazerGun.firing = true
        resolve([x, y, z])
    })
}

function moveAndFire(x, y, z){
    adjustPosition(x, y, z).then(coord => {
        console.log(`Arma ajustada para as cordenadas: (${coord[0]}, ${coord[1]}, ${coord[2]})`)
        return fire(...coord)
    }).then(coord => {
        console.log(`Começando a atirar nas coordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
    })
}

moveAndFire(20, 40, 10)

// ----------------------------------------------------------------
// COM ASYNC FUNCTION

let lazerGun2 = {
    shotPerSeconds: 30,
    currentPosition: [30, 45, 70],
    firing: false
}

async function adjustPosition2(x, y, z){
        lazerGun.currentPosition = [x, y, z]
        return [x, y, z]
}

async function fire2(x, y, z){
        lazerGun.firing = true
        return [x, y, z]
}

function moveAndFire2(x, y, z){
    adjustPosition2(x, y, z).then(coord => {
        console.log(`Arma ajustada para as cordenadas: (${coord[0]}, ${coord[1]}, ${coord[2]})`)
        return fire2(...coord)
    }).then(coord => {
        console.log(`Começando a atirar nas coordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
    })
}

moveAndFire2(40, 10, 50)