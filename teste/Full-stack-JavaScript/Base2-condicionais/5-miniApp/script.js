let departureDateEntry = prompt("Digite a data de partida da nave(Formato: DD/MM/YYYY")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

console.log(departureDate)

let toDay = moment()
console.log(toDay)

let dateDiff = toDay - departureDate

console.log(dateDiff)

let clossenOption = prompt("Escolha como gostaria de exibir o tempo de partida:\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias\N5 - Meses\n6 - Anos")

if (clossenOption == 1) {
    let secondOfDeparture = Math.round(dateDiff/1000)
    alert("Tempo de vôo é de " + secondOfDeparture + " Segundos")
} else if (clossenOption == 2) {
    let minutsOfDeparture = Math.round(dateDiff /1000 /60)
    alert("Tempo de vôo é de " + minutsOfDeparture + " minutos")
} else if (clossenOption == 3) {
    let horasOfDeparture = Math.round(dateDiff/1000 /3600)
    alert("Tempo de vôo é de " + horasOfDeparture + " horas")
} else if (clossenOption == 4) {
    let diasOfDeparture = Math.round(dateDiff/1000 /60 /60 /24)
    alert("Tempo de vôo é de " + diasOfDeparture + " dias")
} else if (clossenOption == 5) {
    let mesesOfDeparture = Math.round(dateDiff/1000 /60 /60 /24 /30)
    alert("Tempo de vôo é de " + mesesOfDeparture + " meses")
} else if (clossenOption == 6) {
    let anosOfDeparture = Math.round(dateDiff/1000 /60 /60 /24 /30 /12)
    alert("Tempo de vôo é de " + anosOfDeparture + " anos")
} else {
    alert("Opçõa inválida")
}