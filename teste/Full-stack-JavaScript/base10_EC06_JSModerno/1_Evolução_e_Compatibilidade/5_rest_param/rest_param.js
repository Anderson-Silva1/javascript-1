function saudacao(mensagem, nomes){
    console.log(nomes)
    nomes.forEach(nome => {
        console.log(mensagem, nome)     
    });
}

var mensagem = "Seja bem vindo"
let nomes = ["Anderson", "Rafaela", "Emanoel", "Itaú"]
saudacao(mensagem, nomes) // Podemos passar diretamente assim, como um Array separado

console.log()

// Ou podemos fazer usando o rest param:
saudacao = function(mensagem, ...nomes /* Esse "nomes" está pegando todos os outros parâmetros que estão depois do primeiro parâmetro... Se tivermos 10 parâmetros sendo enviados a função, o spread vai fazer o "nomes" receber 9 deles */){
    nomes.forEach(nome => {
        console.log(mensagem, nome)
    })
    console.log(nomes) // [ 'Anderson',  'Rafaela', 'Emanoel', 'Itaú', 'Santander', 'Bem 10', 'Luna', 'Scoobydoo', 'Super Man'] => O spread operator tranformou todos os outros parâmetros da função em uma lista
}
var mensagem = "Seja bem vindo"
saudacao(mensagem, "Anderson", "Rafaela", "Emanoel", "Itaú", "Santander", "Bem 10", "Luna", "Scoobydoo", "Super Man")

