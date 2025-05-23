class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    maiusculo(){ // Esse éu método da Class Pessoa
        this.nome = this.nome.toUpperCase()
        console.log('Passando pela class Pessoa')
    }
}
class Banco{
    constructor(numeroAgencia, nomePessoa, idadePessoa){
        this.numeroAgencia = numeroAgencia
        this.pessoa = new Pessoa(nomePessoa, idadePessoa) // Criamos uma instância da class Pessoa como um atributo da class Banco
    }

    minusculo(){
        this.pessoa.nome.toLowerCase() // Modificando atributo da instância da class Pessoa dentro da class Banco
        console.log('Passando pela class Banco')
    }
}
let conta1 = new Banco(1000, "Anderson", 19)
console.log(conta1.pessoa.nome)
conta1.pessoa.maiusculo() // Estamos usando os métodos da classe "Pessoa" dentro da classe "Banco"
console.log(conta1.pessoa.nome)
// console.log(pessoa.nome) // Não dá certo chamar assim, pq a instância "pessoa" está dentro da Classe Banco

conta1.minusculo()

console.log(conta1.pessoa.nome)