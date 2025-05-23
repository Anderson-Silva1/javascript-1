class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    mostrarNome(){ // Método 1
        console.log(this.nome)
        console.log('Estamos dentro da Classe Pessoa')
    }
}

class Capitao extends Pessoa{
    constructor(nome, idade, batalhao){
        super(nome, idade) // O método super aqui está pegando ops atributos da Class Pessoa e usando nos atributos da Class Capitao
        this.batalhao = batalhao // Novo atributo
    }

    mostrarNome(){ // Método 2
        super.mostrarNome() // O métrodo super está chamando a função mostrarNome da Class Pessoa
        console.log(this.nome)
        console.log('Estamos dentro da Classe Capitao')
    }
}

let capitao1 = new Capitao('Anderson', 19, "13° Batalhão")

capitao1.mostrarNome()
// Estamos dentro da Classe Pessoa
// Estamos dentro da Classe Capitao

// Nossas duas Classes (Pessoa e Capitao) possuem o mesmo método (mostraNome)... Se isso acontecer, o JavaScript vai execultar o método que está dentro da Instância da Classe que esse método foi chamado

console.log(capitao1.nome)
console.log(capitao1.idade)
console.log(capitao1.batalhao)