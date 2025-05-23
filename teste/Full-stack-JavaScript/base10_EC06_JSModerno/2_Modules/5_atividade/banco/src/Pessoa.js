import { Banco } from "./Banco"

class Pessoa extends Banco{
    constructor(agencia, numero_conta, nome, cpf, sexo){
        super(agencia, numero_conta)
        this.nome = nome
        this.cpf = cpf
        this.sexo = sexo
    }

    ver_saldo(){
        console.log(`O saldo de ${this.nome} é de R$${this.saldo}`)
    }

    deposito(valor, transacoes_gerais){
        let saldoAntes = this.saldo
        this.saldo += valor
        this.transacoes.push(`(${this.nome}) DEPOSITO - R$${valor} => SALDO ANTES R$${saldoAntes} / SALDO DEPOIS - R$${this.saldo}`)
        transacoes_gerais.transacoes_gerais.push(`(${this.nome}) DEPOSITO - R$${valor} => SALDO ANTES R$${saldoAntes} / SALDO DEPOIS - R$${this.saldo}`)
    }

    saque(valor,transacoes_gerais){
        if(this.saldo < valor){
            console.log(`ERROR (${this.nome}) - Saldo insuficiente: R$${this.saldo}`)
            this.transacoes.push(`ERROR (${this.nome}) - Saldo insuficiente => Valor Saque: R$${valor} / Saldo: R$${this.saldo}`)
            transacoes_gerais.transacoes_gerais.push(`ERROR (${this.nome}) - Saldo insuficiente => Valor Saque: R$${valor} / Saldo: R$${this.saldo}`)
        } else if(this.saldo >= valor){
            let saldoAntes = this.saldo
            this.saldo -= valor
            this.transacoes.push(`(${this.nome}) SAQUE - R$${valor} / SALDO ANTES: R$${saldoAntes} / SALDO DEPOIS: R$${this.saldo}`)
            transacoes_gerais.transacoes_gerais.push(`(${this.nome}) SAQUE - R$${valor} / SALDO ANTES: R$${saldoAntes} / SALDO DEPOIS: R$${this.saldo}`)
        }
    }

    traslacao(valor, destino, transacoes_gerais){
        if(this.saldo < valor){
            console.log(`ERROR TRANSLAÇÃO (${this.nome}) - R$${valor} / DE: ${this.nome} / PARA: ${destino.nome} / Saldo insuficiente: R$${this.saldo}`)
            this.transacoes.push(`ERROR TRANSLAÇÃO - R$${valor} / DE: ${this.nome} / PARA: ${destino.nome} / Saldo insuficiente: R$${this.saldo}`)
            transacoes_gerais.transacoes.push(`ERROR TRANSLAÇÃO - R$${valor} / DE: ${this.nome} / PARA: ${destino.nome} / Saldo insuficiente: R$${this.saldo}`)
        } else if (this.saldo >= valor){
            let saldoAntes = this.saldo
            let saldoAntesDestino = destino.saldo

            this.saldo -= valor
            destino.saldo += valor

            this.transacoes.push(`TRANSAÇÃO EFETUADA - R$${valor} => DE: ${this.nome} (saldo antes: R$${saldoAntes} / saldo depois: R$${this.saldo}) / PARA: ${destino.nome}`)

            destino.transacoes.push(`TRANSAÇÃO RECEBIDA - R$${valor} => DE: ${this.nome} / PARA: ${destino.nome} (saldo antes: R$${saldoAntesDestino} / saldo depois: R$${destino.saldo})`)

            transacoes_gerais.transacoes_gerais.push(`TRANSAÇÃO RECEBIDA - R$${valor} => DE: ${this.nome} (saldo antes: R$${saldoAntes} / saldo depois: R$${this.saldo}) / PARA: ${destino.nome} (saldo antes: R$${saldoAntesDestino} / saldo depois: R$${destino.saldo})`)
            
        }
    }

    estrato(){
        console.log(`Titular: ${this.nome}\nAgência: ${this.agencia}\nNúmero da conta: ${this.numero_conta}\nCPF: ${this.cpf}\nSexo: ${this.sexo}\nSaldo: ${this.saldo}`)
    }


}

export { Pessoa }