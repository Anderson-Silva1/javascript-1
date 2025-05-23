const velocity = 100

// Sintaxe do IF
if (velocity >= 0 && velocity <= 20) {
    console.log("Aumente a velocidade")
} else if (velocity > 20 && velocity <= 40) {
    console.log("Velocidade baixa");
} else if (velocity > 40 && velocity <= 80 ){ 
    console.log("Estamos na velocidade ideal")
} else if (velocity > 80 && velocity <= 100) {
    console.log("Perto da velocidade de risco!, cuidado")
} else { // O else não precisa de um bloco de código para verificar a tabela verdade
    console.log("Estamos em uma velocidade de risco!!, diminua a velocidade");
}

// Podemos também usar opperadores ternários: "?" ":"... Onde ele vai fazer o mesmo papel do IF ELSE porém em apenas uma linha de código, por isso o Nome "IF de uma linha"... Esse tipo de operador só é recomendado quando o bloco de código e a expressão de verificação forem pequenos...

(velocity <= 100) ? console.log("Velocidade aceitável") : console.log("Acima do limite")