// indexOf => Esse método vai buscar uma informação dentro de um array e retornar a posição (index)
// Precisamos atribuir ele a uma variável

lista = ["Anderson", "Rafaela", "Tomáz", "Luna"]

pos_anderson = lista.indexOf('Anderson')
pos_rafaela = lista.indexOf('Rafaela')
pos_tomaz = lista.indexOf('Tomáz')
pos_luna = lista.indexOf('Luna')
pos_inexistente = lista.indexOf('Luiz')

console.log(pos_anderson) // 0
console.log(pos_rafaela) // 1
console.log(pos_tomaz) // 2
console.log(pos_luna) // 3

console.log(pos_inexistente) // -1
// Quando não é encontrado um dado dentro do array ele vai retornar o "-1"