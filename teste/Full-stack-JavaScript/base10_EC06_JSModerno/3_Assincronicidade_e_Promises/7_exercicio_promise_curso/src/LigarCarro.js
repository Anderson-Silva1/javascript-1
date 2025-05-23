export default class {
    constructor(Carro){
        this.Carro = Carro
    }

    ligar(){
        this.verificandoBateria().then((porcentagemBateria) => {
            console.log(`${this.Carro.nome} => Partida autorizada: ${porcentagemBateria}% / CAPACIDADE TANQUE`)
        }).catch((porcentagemBateria) => {
            console.log(`${this.Carro.nome} => Partida não autorizada: ${porcentagemBateria}% / CAPACIDADE TANQUE`)
        })
    }

    verificandoBateria(){
        return new Promise((resolve, reject) => {
            let porcentagem = this.Carro.porcentagemBateria()

            if (porcentagem >= 30){
                resolve(porcentagem)
            } else {
                reject(porcentagem)
            }
        })
    }
}