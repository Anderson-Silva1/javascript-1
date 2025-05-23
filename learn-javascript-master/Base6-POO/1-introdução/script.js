// POO em JavaScript
// Para criarmos um Array usavamos os colchetes "[]"... Para criarmos um objeto usamos as chaves "{}"

// Essa é a declaração de um Objeto
const persona = {
    name /* Essa é a nossa CHAVE */: "Anderson" /* Esse é nosso VALOR */,
    age: 19,
    sexo: "Masculino"
}
console.log(persona)

// Dentro da lista, para acessarmso uma informação, usavamos os colchetes: lista["index"]... No POO usamos o ponto "." junto com o nome da chave:
console.log(persona.name) // Anderson

// Outra forma de acessar o valor de uma chave no POO é usando as chaves, e dentro das chaves, no formato de string, colocar o nome da chave... dessa seguinte forma:
console.log(persona["age"])

// Podemos criar chaves e valores depois da criação do Objeto, basta usar o nome do objeto + "." + nome da chave recebendo o valor... Dessa seguinte forma:
persona.nascimento = "13/10/2004"
console.log(persona.nascimento)

// Outra forma de Criar uma nova chave e valor em um Objeto:
persona["saude"] = "Boa"
console.log(persona["saude"]);


/* ---------------------------- Parte 2 ---------------------------- */

// Podemos criar objetos com chaves do tipo: Number, String, Boolean...
const persona2 = {
    "user name": "Anderson",
    2: 19,
    true: "Masculino"
}
// console.log(persona2.user name) => Porém não conseguirems acessar dessa forma

// porém dependendo da forma que iremos acessar os valores dessas chaves, poderá dar erro, então, por padrão usamos a forma de declaração de uma chave de um Objeto o camelCase
const persona3 = {
    userName: "Anderson",
    age: 19,
    sexo: "Masculino"
}