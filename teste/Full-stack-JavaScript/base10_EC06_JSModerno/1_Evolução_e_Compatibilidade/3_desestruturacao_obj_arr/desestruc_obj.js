let objeto = {
    nome: 'Anderson',
    idade: 19,
    genero: 'homen'
}

// Antes da Desestruturação:
var nome = objeto.nome
var idade = objeto.idade
var genero = objeto.genero
console.log(nome, idade, genero) // Anderson 19 homen

// Depois da desestruturação:
var {nome: nomePessoa, idade: idade, genero: genero} = objeto
console.log(nome, idade, genero) // Anderson 19 homen

// Simplificando ainda mais:
var {nome: nomePessoa, idade, genero} = objeto
console.log(nomePessoa, idade, genero) // Anderson 19 homen


// podemos usar a desestruturação dentro de uma função:
function destruct({ nome: nomePessoa, idade, genero }){
    console.log( nomePessoa, idade, genero )
}
destruct(objeto) // Anderson 19 homen