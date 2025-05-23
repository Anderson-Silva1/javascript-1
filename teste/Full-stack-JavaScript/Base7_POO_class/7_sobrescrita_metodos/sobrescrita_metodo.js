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
    mostrarNome(){ // Método 2
        console.log(this.nome)
        console.log('Estamos dentro da Classe Capitao')
    }
}

let capitao1 = new Capitao('Anderson', 19)

capitao1.mostrarNome()
// Estamos dentro da Classe Capitao

// Nossas duas Classes (Pessoa e Capitao) possuem o mesmo método (mostraNome)... Se isso acontecer, o JavaScript vai execultar o método que está dentro da Instância da Classe que esse método foi chamado