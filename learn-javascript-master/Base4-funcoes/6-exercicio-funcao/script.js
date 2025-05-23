let spaceshipName = prompt("Digite o nome da nave")

let spaceshipVelocity = 0

let chosenOption

function showMenu(){
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n1 - Acelerar a nave em 5km/s\n2 - Desacelerar a nave em 5 km/s\n3 - Ver os dados de bordo\n4 - Sair do programa")
    }
    return option
}

function speedUp(velocity) {
    let newValocity = velocity + 5
    return newValocity
}

function slowDown(velocity){
    let newValocity = velocity - 5
    if (newValocity < 0){
        newValocity = 0
    }
    return newValocity
}

function printSpaceshipBoardData(name, velocity){
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s")
}

do {
    chosenOption = showMenu()

    switch(chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break
        case "3":
            printSpaceshipBoardData(spaceshipName, spaceshipVelocity)
            break
        default:
            alert("Encerrando o programa de bordo")
    }
} while (chosenOption != "4")