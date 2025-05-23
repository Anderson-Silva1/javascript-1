/*
    Minha forma de reslolução, está correto, mas precisa melhorar na legibilidade do código

    const anosLuz = prompt("Qual a distância em anos luz você quer usar?")

    const escolhaMedida = prompt("Em qual unidade de medida você quer calcular os anos luz?\n1 - Parsec (PC)\n2 - Unidade astronômica (AU)\n3 - Quilômetro (KM)\n\nDigite o número da opção desejada")

    switch(escolhaMedida) {
        case "1":
            const conversaoPc = anosLuz * 0.306601
            console.log(`Distância em anos luz: ${anosLuz}\nDistância em PC: ${Math.round(conversaoPc)}`)
            break
        case "2":
            const conversaoAu = anosLuz * 63241.1
            console.log(`Distância em anos luz: ${anosLuz}\nDistância em AU: ${Math.round(conversaoAu)}`)
            break
        case "3":
            const conversaoKm = anosLuz * (9.5 * Math.pow(10,12))
            console.log(`Distância em anos luz: ${anosLuz}\nDistância em KM: ${conversaoKm}`);
            break
        default:
            console.log("Não é possível calcular");
    }
*/

const distanceInLy = prompt("Qual a distância em anos-luz você quer usar?")

const chosenOption = prompt("Qual das opções a seguir você deseja usar para a conversão?\n1 - Parsec (PC)\n2 - Unidade astronômica (AU)\n3 - Quilômetro (KM)\n\nDigite o número da opção desejada")

console.log(chosenOption)

let chosenUnited
let convertedDistance

// Quando fazemos isso estamos recebendo um acomparação estrita (compara tanto o dado quanto o tipo) porém o "prompt" só recebe valor de "string", então não podemos colocar nas "cases" o tipo de dado number, pois não irá ser igual a uma string... 
switch(chosenOption) {
    case "1":
        chosenUnited = "Parsec (PC)"
        convertedDistance = Math.round(distanceInLy * 0.306601)
        break
    case "2":
        chosenUnited = "Unidade astronômica (AU)"
        convertedDistance = Math.round(distanceInLy * 63241.1)
        break
    case "3":
        chosenUnited = "Quilômetro (KM)"
        convertedDistance = Math.round(distanceInLy * (9.5 * Math.pow(10,12)))
        break
    default:
        chosenUnited = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert(`Distância anos-luz: ${distanceInLy}\n${chosenUnited}: ${convertedDistance}`)
