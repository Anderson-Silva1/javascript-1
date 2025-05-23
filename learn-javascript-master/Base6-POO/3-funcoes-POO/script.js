// Podemos atribuir aso valores das chaves Funções
const spaceship = {
    name: "Estelar",
    type: "Extração",
    maxCrew: 20,
    turnOf: ()=>{
        console.log("Preparando motor")
        console.log("Preparando controle de bordo")
    } // Criamos uma Arrow Function para ser o valor dessa chave "turnOf"
}

spaceship.turnOf() // Assim chamamos um método de um Objeto

spaceship.velocity = 0

spaceship.speedUp = (objeto, aceleration) => {
    objeto.velocity =+ aceleration
}

// Nesse caso acima estamos solicitando ao código pelo parâmetro quando formos chamar a Função, o próprio Objeto, e isso torna o ódigo Macarrônico, ilegível... Para isso usamos a palavra this que significa "esse", para referenciar o próprio objeto dentro da função que está dentro de um atributo deste Objeto

spaceship.speedUp2 = (velocity) => {
    const newVelocity = this.velocity =+ velocity // Esse "this" está referenciando o próprio OBJETO
    return newVelocity
}

console.log(spaceship.speedUp2(10))

// Um exemplo mais simpls de usar o "this"

const persona = {
    name: "Anderson da Silva Valentim",
    printName: function() {
        console.log(this.name)
    }
}

persona.printName()

// Neste exemplo Criamos um Objeto com duas chaves: name e printName... Onde no printName há uma Função, usamos o próprio objeto usando o referenciador "this" para dar um console.log dentro de uma função