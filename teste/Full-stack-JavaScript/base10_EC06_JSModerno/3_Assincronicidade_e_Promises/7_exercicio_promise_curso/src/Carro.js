class Carro {
    constructor(nome, tanqueCheio, tanqueAtual){
        this.nome = nome
        this.tanqueCheio = tanqueCheio
        this.tanqueAtual = tanqueAtual
    }

    porcentagemBateria(){
        return (100 * this.tanqueAtual / this.tanqueCheio).toFixed(0)
    }
}

export default Carro