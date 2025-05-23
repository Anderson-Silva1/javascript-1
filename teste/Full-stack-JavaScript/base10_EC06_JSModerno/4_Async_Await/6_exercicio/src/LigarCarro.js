import Carro from "./Carro";

function regra_de_3(tanqueCheio, tanqueAtual){
    let resultado = 100 * tanqueAtual / tanqueCheio
    return resultado
}


export default class LigarCarro extends Carro{
    LigarCarro(){

        let porcentagem = regra_de_3(this.tanqueCheio, this.tanqueAtual)

        if (this.partida() == true) {
            console.log(`Carro ${this.nome}: Partida altorizada. ${porcentagem.toFixed(0)}%`)
        } else {
            console.log(`Carro ${this.nome}: Partida não altorizada. ${porcentagem.toFixed(0)}%`)
        }

        return regra_de_3(this.tanqueCheio, this.tanqueAtual).toFixed(0)
    }
}