// Sintaxe básica do FOR
for( let count = 0 /* VARIÁVEL */; count < 10 /* EXPRESSÃO */; count++ /* AÇÃO DE CONTROLE */){
    console.log(count) // BLOCO DE CÓDIGO
}

// Vamos mascarar um nome usando o FOR só  para ver um pouco do que conseguimos fazer com ele
let persona = "ananias" // Iremos musar todas letras "a" para "e"
let newPersona = "" // Criamos uma variável sem apenas como valor string vazio para receber o novo nome

for( let i = 0 /* Criamos a variável padrão do FOR */; i < persona.length /* Colocamos a expressão para ser execultada sempre que o "i" for menor que o tamanho da nossa string "ananias" */; i++ /* Colocamos na ação de controle para agregar "+1" a "i" sempre que a expressão anterior for verdadeira */ ){
    
    // Estamos usando uma estrutura de descisão para verificar e trocar as letras "a" por "e"
    if(persona[i] === "a" /* "Se o índice "i" (Variável do FOR) da nossa string "ananias" for igual a string "a" ele vai execultar o Bloco de Código a seguir */) {
        newPersona += "e" // Esse é o Bloco de Código a ser execultado... Aqui ele irá substituir as string's "a" por "e" dentro da nossa variável "persona" e colocar eles dentro da nossa variável "newPersona" que não atribuimos nenhum valor a ela
    } else {
        newPersona += persona[i] // Caso a expressão acima não seja verdade, ele vai execultar esse Bloco de Código... Aqui ele vai pegar todas as outras strings e colocar dentro da nossa string "newPersona"
    }
}

console.log(newPersona) // Estamos dando um console.log da nossa variável "newPersona" para verificar se o código deu certo 