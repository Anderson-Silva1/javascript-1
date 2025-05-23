// Temos 3 tipos de variáveis: VAR, LET e CONST... E cada uma tem as suas peculiaridades

var testevar1 = "Esse é um teste VAR1"
var testevar1 = "Esse é um teste VAR2"
{var testevar1 = "Esse é um teste VAR3"}
console.log(testevar1) // Irá aparecer o console.log o valor "Esse é um teste VAR3"

// Informações sobre o tipo de variável VAR
// 1 - É um tipo de variável manipulável u volátil, pois pode receber outro valor depois de criada
// 2 - É um tipo de variável que pode ser declarada novamente em outra parte do nosso código
// 3 - É um tipo de variável global, o que permite usá-la em qualquer lugar de nossa aplicação
// 4 - Não é a melhor forma de declaração de variável

let testeLet1 = "Esse é um teste LET1"
    testeLet1 = "Esse é um teste LET2"
{
    let testeLet1 = "Esse é um teste LET3"
    console.log(testeLet1) // Irá aparecer "Esse é um teste LET3"
}

console.log(testeLet1) // irá aparecer o valor "Esse é um teste LET2"

// Informações sobre o tipo de variável LET
// 1 - É um tipo de variável manipulável ou volátil, pois pode receber outros valores depois de ser criada...
// 2 - É um tipo de variável que NÃO pode ser declaradanovamente, mas pode receber outro valor... 
// 3 - É uma variável variável tipo "ESCOPE" o que significa que ela só pode ser ultilizada dentro do seu escopo de origem ou contexto em que ela é inserida, seja um Array, um Objeto, uma Função, ETC... Vale resaltar que ela só muda o seu valor ser a mudança estiver tambem no seu escopo de origem

const testeConst1 = "Esse é um teste const1"
    // testeConst1 = "Esse é um teste const2"
{
    const testeConst1 = "Esse é um teste const3"
    console.log(testeConst1) // Irá aparecer "Esse é um teste const3"
}

console.log(testeConst1) // Irá aparecer "Esse é um teste const1"

//  Informações sobre o tipo de variável CONST
// 1 - Variável do tipo Global, pode ser acessada ao longo do desenvolvimento do código
// 2 - Não nanipulável, ou seja não pode receber outro valor.
// 3 - Pode ser declarada fora do seu escopo origem com outro valor, mas não irá mudar o seu valor origem