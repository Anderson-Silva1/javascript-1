// OU True True
if(true && true){
    console.log("Primeiro 'OU': True True")
} else {
    console.log("Foi para o ELSE")
}
// RESULTADO = TRUE

// OU True false
if(true && false) {
    console.log("Segundo 'OU': True false")
} else {
    console.log("Segundo 'OU' Foi para o ELSE");
}
// RESULTADO = FALSE

// E True True
if (true || true) {
    console.log("Primeiro 'E': True True");
} else {
    console.log("Foi para o ELSE");
}
// RESULTADO = TRUE

// E True False
if(true || false){
    console.log("Primeiro 'E': True False");
} else {
    console.log("Foi para o ELSE");
}
// RESULTADO = TRUE

// E False False
if(false || false){
    console.log("Terceiro 'E': True False");
} else {
    console.log("Terceiro 'E' Foi para o ELSE");
}
// RESULTADO = FALSE

// NEGAÇÃO True
if(!true){
    console.log("Primeiro 'NEGAÇÃO': True");
} else {
    console.log("Primeiro 'NEGAÇÃO' Foi para o ELSE");
}
// RESULTADO = FALSE

// NEGAÇÃO False
if(!false){
    console.log("Segundo 'NEGAÇÃO': False");
} else {
    console.log("Foi para o ELSE");
}
// RESULTADO = TRUE

// OPERADORES TERNÁRIOS

5 > 2 ? console.log("Sim") : console.log("Não") // Retorna "SIM"
5 < 2 ? console.log("Sim") : console.log("Não")
"5" == 5 ? console.log("Sim") : console.log("Não") 
5 <= 2 ? console.log("Sim") : console.log("Não")