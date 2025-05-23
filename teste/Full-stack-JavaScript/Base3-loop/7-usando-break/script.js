// Código onde vai verificar cada letra de um determinado nome... Mas sempre que for encontrada a letra "o" o código irá parar de ser execultado

let namePersona = "Anderson"

for(let i = 0; i <= namePersona.length; i++){
    if(namePersona[i] == "o"){
        break // Assim que o código encontrou a letra "o" ele parou de ser execultado...
    }
    console.log(namePersona[i])
}

console.log("")

for(letra in namePersona){
    if(namePersona[letra] == "e"){
        continue // Assim que o código encontrou a letra "e" ele pulou a execulção para a próximna volta do FOR
    }
    console.log(namePersona[letra])
}