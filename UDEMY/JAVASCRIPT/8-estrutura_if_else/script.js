let age = 19  // Declaramos um variável 

if(age < 18){ // Se "age" for menor que 18
    console.log("Você não pode dirigir") // Vai execultar esse bloco de código
} else if (age > 18) { // Se "age" for maior que 18
    console.log("Você pode dirigir") // Vai execultar esse bloco de código
} else if (age == 18) { // Se "age" for igual que 18
    console.log("Você pode tirrar a sua carteira de Habilitação")// Vai execultar esse bloco de código
} else { // Se todos os if's forem false
    console.log("Não é possível saber") // Vai execultar esse bloco de código
}

// Exemplo de IF, ELSE IF E ELSE
if(1 == 2 /* Esse resultado é FALSE */){
    document.write("Entrou dentro do  primeiro Bloco IF (VERDADEIRO)")
} else if (true) {
    document.write("Entrou dentro do segundo Bloco IF (VERDADEIRO)")
} else {
    document.write("Entrou dentro do Blovco ELSE (FAlSO)")
}