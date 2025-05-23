let spaceShip = prompt("Qual o nome da nave?")

let charToReplace = prompt("Qual o caracter que gostaria de trocar?")

let replacementChar = prompt("Por qual caracter gostaria de trocar?")

let newSpaceShip = ""

for( let pos = 0; pos < spaceShip.length; pos++) {
    if( spaceShip[pos] === charToReplace){
        newSpaceShip += replacementChar 
    } else{
        newSpaceShip += spaceShip[pos]
    }
}

alert(`O novo nome da nave é: ${newSpaceShip}`)


