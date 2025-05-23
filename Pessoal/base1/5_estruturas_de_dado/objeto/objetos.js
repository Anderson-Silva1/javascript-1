// Declaração de um objeto em javascript
let obj = {
    nome: "Anderson",
    sobreNome: "Silva",
    idade: 19,
    profissao: "Programador",
}

console.log(obj) // { nome: 'Anderson', sobreNome: 'Silva', idade: 19, profissao: 'Programador' }

// Formas de acessar nosso objeto:
var nomeObj = obj.nome
var sobreNomeObj = obj.sobreNome
var idadeObj = obj.idade
var profissaoObj = obj.profissao
// Usamos o nome da variável que contém o objeto, e selecionamos uma chave atravéz do "." (ponto), e será retornado o valor dessa chave...
console.log(nomeObj, sobreNomeObj, idadeObj, profissaoObj) // Anderson Silva 19 Programador


// Outra forma de acessar os valores das chaves do nosso objeto é usando [] (colchetes), e dentro deles, o nome da chave em formato string no JavaScript, que é caracterizado pelo uso das "", ou ''...
var nomeObj = obj["nome"]
var sobreNomeObj = obj["sobreNome"]
var idadeObj = obj["idade"]
var profissaoObj = obj["profissao"]
console.log(nomeObj, sobreNomeObj, idadeObj, profissaoObj) // Anderson Silva 19 Programador


// Objetos aninhados e objetos com listas
let obj2 = {
    nome: "Anderson",
    sobreNome: "Silva",
    idade: 19,
    profissao: "Programador",
    endereco: {
        rua: "Sublime",
        numero: 300,
        complemento: ["Em frente a quadra do raquel", "Curva do Raquel", "Casa"]
    },
    metas: ["Se tornar um desenvolvedor", "Casar", "Contruir uma familia"]
}

// Acessando um objeto dentro de outro objeto
var enderecoRua = obj2.endereco.rua
var enderecoNumero = obj2.endereco.numero
console.log(enderecoRua, enderecoNumero) // Sublime 

// Acessando uma lista dentro de um objeto
var enderecoComplemento = obj2.endereco.complemento
var metas = obj2.metas
console.log(enderecoComplemento, metas) // [ 'Em frente a quadra do raquel', 'Curva do Raquel', 'Casa' ] [ 'Se tornar um desenvolvedor', 'Casar', 'Contruir uma familia' ]
// Aqui nos podemos usar a indexação para selecionar nossos ítens ou até mesmo usar métodos de arrays

let complemento1 = enderecoComplemento[0]
let complemento2 = enderecoComplemento[1]
let complemento3 = enderecoComplemento[2]
console.log(complemento1, complemento2, complemento3) // Em frente a quadra do raquel Curva do Raquel Casa

let meta1 = metas[0]
let meta2 = metas[1]
let meta3 = metas[2]
console.log(meta1, meta2, meta3) // Se tornar um desenvolvedor Casar Contruir uma familia


// Criando novas chaves depois da inicialização do objeto
obj2.nascionalidade = "Brasileiro"
console.log(obj2.nascionalidade) // Brasileiro


// Funções em objetos, também conhecido como métodos
let obj3 = {
    nome: "Anderson da Silva Valentim",
    mostrarObjeto: function(){
        console.log(this)
    },
    mostrarNome: function(){
        console.log(this.nome)
    },
    mostrarIdade: function(idade){
        this.idade = idade
        console.log(this.idade)
    }
}

obj3.mostrarNome() // Anderson da Silva Valentim
obj3.mostrarObjeto() // Função mostra Objeto por completo:
/* 
    {
        nome: 'Anderson da Silva Valentim',
        mostrarObjeto: [Function: mostrarObjeto],
        mostrarNome: [Function: mostrarNome],
        mostrarIdade: [Function: mostrarIdade]
    } 
*/
obj3.mostrarIdade(19) // Função que cria a chave idade no obj3 e mostra a chave idade desse objeto
obj3.mostrarObjeto() // Função mostra Objeto por completo:
/* 
    {
        nome: 'Anderson da Silva Valentim',
        mostrarObjeto: [Function: mostrarObjeto],
        mostrarNome: [Function: mostrarNome],
        mostrarIdade: [Function: mostrarIdade],
        idade: 19
    }
*/
