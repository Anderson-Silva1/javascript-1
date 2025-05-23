class Banco {
    constructor(agencia, numero_conta){
        this.agencia = agencia
        this.numero_conta= numero_conta
        this.todas_transferencias = []
        this.saldo = 0
        this.transacoes = []
        this.transacoes_gerais = []
    }
}

export { Banco }