export default class Carro {
    constructor(nome, tanqueCheio, tanqueAtual){
        this.nome = nome
        this.tanqueCheio = tanqueCheio
        this.tanqueAtual = tanqueAtual
    }

    partida(){

        let trinta_porcento = this.tanqueCheio * 30 / 100

        if ( this.tanqueAtual >= trinta_porcento ){
            return true
        } else {
            return false
        }
    }
}