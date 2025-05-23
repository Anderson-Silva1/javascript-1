// Criamos a nossa primeira função anônima... Onde vai pegara velocidade e multiplicar por ela mesmo para chegar a velocidade ao quadrado
const velocityAoQuadrado = function(velocity){
    return `${velocity} * ${velocity} = ${velocity * velocity}`
}
// A diferença desse tipo de função para a função normal, é que já estamos criando uma variável para receber o valor dessa função... E não precisamos afzer isso de novo...

console.log(velocityAoQuadrado(10)) // Chamamos a função para o console.logo de maneira normal

// Exemplo da função soma
const sum = function(a,b){
    return a + b
}
// console.log(sum(1,2))

// Outra peculizaridade é que:

console.log(velocidadeAnonima(10,10))
console.log(velocidadeNormal(10,10))

const velocidadeAnonima = function(a,b){
    return a * b
}

function velocidadeNormal(a,b){
    return a + b 
}

