// Correto

const nameNave = prompt("Qual o nome da nave?") // Pegamos o nome da nave atravéz de um prompt

let selectionOption = confirm("Deseja entrar na dobra?") // Criamos uma variável para saber se a nave quer entrar em uma dobra respondendo sim ou não, ou true ou false

let countDobra = 0 // Criamos uma variável para contar quantas vezes anave entrou em uma dobra

while(selectionOption) { // Criamos um "WHILE" que vai execultar esses códigos abaixo quando a variável "selectionOption" receber o valor true no confirme
    selectionOption = confirm("Deseja realizar próxima dobra?") // Caso a resposta do usuário seja sim em realizar uma dobra, ele vai fazer essa pergunta, "deseja realizar mais uma dobra?"... Perceba que estou sobreescrevendo a variável "selectionOption" criada fora do escopo do "while", que é justamente o parâmetro para continuar execultando esse bloco de código... Enquanto "selectionOption" for true ele vai continuar execultando
    countDobra++ // Caso a resposta seja sim ele vai atribuir um +1 a variável de contagem de dobra
}

alert("A nave " + nameNave + " realizou " + countDobra + " dobras") // Estamos colocando o nome da nave e quantas dobras ela realizou

/* Vale resaltar que na programação podemos chegar a resolução de um problema de diversas formas diferentes... podemos ao invés de pedir um confirm, pedir um prompt com duas seleões: 1 - sim e 2 - não... e adequar ao código, que dará o mesmo resultado */