console.log("\npush\n\n")
// Serve para adicionar novos ítens no nosso array

const namespush = ['João', 'Pedro', 'Rafaela', "Anderson"]

namespush.push('Fernando')
namespush.push("Gabriel", 'Lucas', `Paulo`)
namespush.unshift("Jonas")
// OBS: Será adicionado no final do array

console.log(namespush)

// Resultado: [ 'João',  'Pedro', 'Rafaela',  'Anderson', 'Fernando', 'Gabriel', 'Lucas', 'Paulo' ]