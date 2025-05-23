export default class {
    constructor(Spaceship){
        this.spaceship = Spaceship
    }

    turnOn(){
        let currentChargeChecking = this.checkCurrentCharge()
        let shieldChecking = this.testeShield()

        Promise.all(currentChargeChecking, shieldChecking).then(resolve => {
            return this.shieldNormilize(resolve[1])
        }).then((newShield) => {
            this.spaceship.shield = newShield
            console.log(`(${this.name}) Partida autorizada: Escudo ${this.spaceship.shield}GJ`)
        })
        .catch(reject => 
            {console.log(`(${this.name}) Partida não altorizada: ${reject}`)
        })
    }

    checkCurrentCharge(){
        return new Promise((resolve, reject) => {
            let currentCharge = this.spaceship.currentPercentCharge()

            if (currentCharge >= 30){
                resolve(currentCharge)
            } else {
                reject(`Carga em apenas ${currentCharge}GJ`)
            }
        })
    }

    testeShield(){
        return new Promise((resolve, reject) => {
            let dubledShield = this.spaceship.shield * 2

            if  (dubledShield >= 100){
                resolve(dubledShield)
            } else {
                reject('Escudo em sobre carga')
            }
        })
    }

    shieldNormilize(shield){
        return new Promise((resolve, reject)=> {
            let normalizeShield = shield * 0.7

            if (normalizeShield >= 120){
                reject("Escudo em super carga")
            } else {
                resolve(normalizeShield)
            }
        })
    }
}