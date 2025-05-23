// Programa onde Recebe um nome, inverte esse nome usando o "for" e para a validação quando é encontrado a letra "e"

let spaceschipName = prompt("Qual é o nome da nave?")

let invertedName = ""

for( let i = spaceschipName.length - 1; i >= 0; i--){
    if(spaceschipName[i] == "e") {
        break
    }
    invertedName += spaceschipName[i]
}

alert(`Nome original da Nave:\n${spaceschipName}\nNome após ocultação e sem a letra "e":\n${invertedName}`)