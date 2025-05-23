console.log("\ndelete\n\n")
// Vaí deletar um ítem do array

const namesdelete = ['João', 'Pedro', 'Rafaela', "Anderson"]

delete namesdelete[0] // Está deletando o 1° índice do nosso array namesdelete

console.log(namesdelete)
console.log(namesdelete[0])

// OBS: Essa forma de usar os arrays apenas deleta os ítens e não puxa os outros para suprir a posição do ítem deletado... O ítem deletado ficara como undefined 

//Resultado: undefined