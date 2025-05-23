console.log("\nindexOf\n\n")

// O indexOf é uma retorna função que retorna exatamente onde está determinado elemento

const namesIndexOf = ["Anderson", "Rafaela", "Emanoel"] // Nossa Lista de nomes

const posNamesIndexOf = namesIndexOf.indexOf('Emanoel') // Criamos uma variável recebendo a Função indexOf dentro da lista "namesIndexOf"... Dentro dessa Função indexOf colocamos um valor, Valor esse que vai ser procurado dentro do Array "namesIndexOf"
console.log(posNamesIndexOf) // Vai mostrar o resultado em forma de index da procura do indexOf no Array "namesIndexOf"
console.log(namesIndexOf[posNamesIndexOf]) // Vai mostrar qual é o dado dentro do índex achado pela função indexOf

console.log("")

// Estamos fazendo a mesma coisa porém com números agora
const number = [1,2,3,41,2,5,7,54,32,4,6,2]
const posNumber = number.indexOf(6)
console.log(posNumber)

console.log(number[posNumber])

// Caso não exista o valor do indexOf ele retornará "-1"
const erro = ["teste1", "teste2", "teste3"]
const posErro = erro.indexOf("teste") // Dentro do nosso Arrau "erro", o dado "teste" não existe... Logo o resultado do indexOf será "-1"
console.log(posErro)

// Criamos uma validação para caso o dado não exista, ou melhor, caso o indexOf retorne "-1", aplicará o bloco de código aseguir
if (posErro < 0) {
    console.log("Esse nome não existe")
} else {
    console.log("Esse nome existe")
}