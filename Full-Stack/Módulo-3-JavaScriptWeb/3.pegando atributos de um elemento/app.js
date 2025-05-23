const teste = document.querySelector('input')
const teste2 = document.querySelector('a')
const teste3 = document.querySelector('img')

console.log(`Os atributos do nosso input é:`)
console.log(teste)
console.log(teste.attributes) /* Usamos esse tipo de chamamento quando queemso ver todos os atributos de um elemento. */
console.log(`O type do nosso input é: ${teste.type}`)
console.log(`O value do nosso input é: ${teste.value}`)
console.log(`O id do nosso input é: ${teste.id}`)
console.log(`O name do nosso input é: ${teste.name}`)
console.log(`mostrando SRC do nosso Link ${teste2.href}`)
console.log(`Esse é o endereço da nossa imagem de arara ${teste3.src}`)
console.log(`${teste3.alt}`)
