class Pessoa {
    constructor(namePersona, idade, peso, altura){
        Pessoa.namePersona = namePersona
        Pessoa.idade = idade
        Pessoa.peso = peso
        Pessoa.altura = altura
    }
}

const pessoa1 = new Pessoa('Anderson', 19, 50, 1.65)
console.log(pessoa1) // Pessoa { name: 'Anderson', idade: 19, peso: 50, altura: 1.65 }

const pessoa2 = new Pessoa('Lucas', 39, 60, 1.75)
console.log(pessoa2) // Pessoa { name: 'Lucas', idade: 39, peso: 60, altura: 1.75 }

const pessoa3 = new Pessoa('Fernando', 49, 80, 1.95)
console.log(pessoa3) // Pessoa { name: 'Fernando', idade: 49, peso: 80, altura: 1.95 }

const pessoa4 = new Pessoa('Rafaela', 25, 60, 1.62)
console.log(pessoa4) // Pessoa { name: 'Rafaela', idade: 25, peso: 60, altura: 1.62 }

// Criamos um molde para 4 elementos, ou uma class para 4 instâncias/objetos