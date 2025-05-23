const velocity = 80

/* O Switch vai basicamente procurar o resultado que mais se adequa ao que ele espera... No nosso caso a baixo ele espera o resultado da variável "velocity" multiplicado por 2, que no nosso caso dará o resultado: 160 */
switch (velocity * 2) {
    // Esse case será desconsiderado pois ele não se adequa ao resultado esperado que é "velocity * 2"
    case 100:
        console.log("Sua velocidade é de 50 km/h")
        break // Esse carinha serve para parar a verificação, sem ele, o Switch iria continuar fazendo essa verificação... Ou seja ele vai continuar execultando os outros "cases" até achar essa palavra
    case 160:
        console.log("Sua velocidade é de 80 km/h")
        break
    // O "default" é basicamente o ELSE do IF... Caso nenhuma das "cases" a cima representarem o resultado esperado pelo Switch, ele entrará em ação...
    default:
        console.log("Velocidade não definida")
}

// Nesse caso estamos fazendo uma validação de usuário
const user = "Anderson"

switch(user /* Está recebendo a string "Anderson" */){
    case "Anderson":
        console.log("Acesso permitido")
        break
    default:
        console.log("Acesso negado");
        // o default não precisa de break pois ele já é a últiuma instância de verificação
}

const velocity2 = 90

switch (velocity2) {
    case 80:
        console.log("Velocidade mínima, 80 km/h")
        break
    case 90: // Perceba que esse case mais se encaixa no resultado esperado do switch... Porém a ele não está agregado nenhum valor, o que faz o switch continuar a té achar uma case que tenha uma ação
    case 100:
        console.log("Acima da valocidade, 100 km/h");
        break
    default:
        console.log("Velocidade não definida")
}

const velocity3 = 90

switch (velocity3) {
    case 80:
        console.log("Velocidade mínima, 80 km/h")
        break
    case 90: // Perceba que esse case mais se encaixa no resultado esperado do switch... Porém a ele não está agregado nenhum valor, o que faz o switch continuar a té achar uma case que tenha uma ação
    case 100:
        console.log("Acima da valocidade, 100 km/h");
    case 110:
        console.log("Acima da valocidade, 110 km/h");
    case 120:
        console.log("Acima da valocidade, 120 km/h");

        /* Perceda que em nenhum desses três últimos cases possuem o "break"... E com isso, o Switch execultou as informações de todos eles, inclusive do "default" */
    default:
        console.log("Velocidade não definida")
}