import { Pessoa } from "./Pessoa";

const pessoa1 = new Pessoa(3000, 1, "Anderson", "12345678910", "homen")
const pessoa2 = new Pessoa(3000, 2, "Rafaela", "12345612345", "mulher")
const pessoa3 = new Pessoa(3000, 3, "Emanoel", "22342342345", "homen")
const pessoa4 = new Pessoa(3000, 4, "João", "34534534567", "homen")
const pessoa5 = new Pessoa(3000, 5, "Luísa", "12321354345", "mulher")
const transacoes_gerais = new Pessoa(undefined, undefined, undefined, undefined, undefined)

pessoa1.deposito(1000, transacoes_gerais)
pessoa1.saque(1500, transacoes_gerais)
pessoa2.deposito(3500, transacoes_gerais)
pessoa2.saque(1500, transacoes_gerais)
pessoa3.deposito(2000, transacoes_gerais)
pessoa4.deposito(3700, transacoes_gerais)
pessoa2.saque(3500, transacoes_gerais)
pessoa5.deposito(6000, transacoes_gerais)

pessoa1.traslacao(500, pessoa3, transacoes_gerais)
pessoa1.traslacao(500, pessoa3, transacoes_gerais)
pessoa3.traslacao(2000, pessoa2, transacoes_gerais)
pessoa2.traslacao(5000, pessoa4, transacoes_gerais)
pessoa4.traslacao(8000, pessoa5, transacoes_gerais)
pessoa5.traslacao(11000, pessoa1, transacoes_gerais)

pessoa1.ver_saldo()
pessoa2.ver_saldo()
pessoa3.ver_saldo()
pessoa4.ver_saldo()
pessoa5.ver_saldo()

// console.log(pessoa1.transacoes)
// console.log(pessoa2.transacoes)
// console.log(pessoa3.transacoes)
// console.log(pessoa4.transacoes)
// console.log(pessoa5.transacoes)

console.log(transacoes_gerais.transacoes_gerais)

