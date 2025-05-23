// Nosso escopo Global, onde contém o Console.log
// console.log(window)

// Seria basicamente um Objeto que está dentro de outro Objeto
const global = {
    console: {
        log: () => {console.log("Teste")}
    }
}
// console.log(global.console.log())
// Acaba se tornando isso


// Dentro do node e do Js Temos um carinha chamado "this" que significa "esse ou "este"... Ele é geralmente usado para referenciar ao Objeto pai... Exemplo, no node, o "this" referência o "module.exports"

/*console.log(this === module.exports)*/ // true

// Não estou entendendo Anderson, o que podemos fazer com isso??...
// Lembra que podemos usar o module.exports para exportar dados?... Pser, podemos usar o "this" ao invéz de "module.exports"
const dado = {
    dado1: "teste"
};

// this.dado = dado // dado => Verficar qual foi o ERRO


// Dentro de um escopo Local o THIS vai referênciar o Objeto pai

const persona = {
    name: "Anderson",
    age: 19,
    talk: function() { // usamos uma Função normal pois em JavaScript, arrow functions não têm seu próprio contexto de this; elas herdam o this do escopo onde foram definidas.
        console.log("Olá")
        // Caso a gente queira pegar o valor da chave "nome" desse objeto para usar ela, sem o this poderiamos pegar o objeto de novo e referenciar a chave "nome", mas ficaria um código macarronico, então temos o this para fazer isso...

        console.log(`Olá ${this.name} de ${this.age}, correto?`)
        console.log(this.name)
        
    }
}
persona.talk() // Precisamos chamar nossa Função

// ESTUDAR MAIS SOBRE O THIS