let nota = 7
let falta = 15
let faltaMax = 15
let media = 7

if(nota >= media && falta <= faltaMax){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

// OPERADORES TERNÁRIOS

nota >= media && falta <= faltaMax ? document.write("Aprovado") : document.write("Reprovado")

document.write("<br><br><hr><br><br>")
// PROJETO EXIBIR A FASE DE VIDA DE UMA PESSOA

const age = prompt("Qual a sua Idade?")
const crianca = 10
const adolecente = 14
const jovem = 18
const jovemAdulto = 24
const Adulto = 40
const idoso = 60
const terceiraIdade = 100

if(age >= 0 && age <= crianca){
    document.write("Você é uma Criança")
} else if(age > crianca && age <= adolecente ){
    document.write("Você é um Adolecente")
} else if(age > adolecente && age <= jovem ){
    document.write("Você é um Jovem")
} else if(age > jovem && age <= jovemAdulto ){
    document.write("Você é um Jovem Adulto")
} else if(age > jovemAdulto && age <= Adulto ){
    document.write("Você é um Adulto")
} else if(age > Adulto && age <= idoso ){
    document.write("Você é um Idoso")
} else if(age > idoso && age <= terceiraIdade ){
    document.write("Você está na 3° Idade")
} else if(age >= terceiraIdade){
    document.write("Você é um Ansião")
} else {
    document.write("Não foi possível cálcular a sua Fase da Vida")
}