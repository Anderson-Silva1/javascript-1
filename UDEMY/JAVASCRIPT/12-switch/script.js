const opcao = 3

switch (opcao /* Esse é o nosso parâmetro, se os "CASE" forem igual a ele, será execultado o respectivo bloco de código */) {
    case 1:
        console.log("Case 1")
        break;
    case 2:
        console.log("Case 2")
        break;
    case 3:
        console.log("Case 3")
        break;
    default: // Esse elemento do Switch vai servir como um ELSE
        console.log("Valor default")
        break;
}