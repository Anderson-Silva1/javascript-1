//  Splice (unir/ligar) -> Ele permite que a gente tire ítens do nosso array exatamente onde a gente quer ou coloque ítens no nosso array exatamente na posição que a gente quer

const namessplice1 = ['João', 'Pedro', 'Rafaela', "Anderson", 'Joana', 'Fernando', 'Lucas']

// No splice temos 2 parâmetros: o primeiro parâmetro se refere ao indice do ítem que a gente vai querer tirar, e o segundo parâmetro é quantos ítens vão ser tirados

console.log(namessplice1) // ['João', 'Pedro', 'Rafaela', "Anderson", 'Joana', 'Fernando', 'Lucas']
newArr1 = namessplice1.splice(1, 4) // Variável com o valor que foi tirado do array namessplice1
console.log(namessplice1) // [ 'João', 'Fernando', 'Lucas' ]
console.log(newArr1) //[ 'Pedro', 'Rafaela', 'Anderson', 'Joana' ]