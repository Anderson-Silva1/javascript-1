let arr = ["Anderson", "Rafaela", "Emanoel", "Lucas"]

for(item in arr){
    console.log(item)
}
/*
    0
    1
    2
    3
*/
// Dessa forma conseguimos iterar cada índex do nosso array

// Podemos ver os valores de cada ítem do array usando um gambiarra ksksk
for(item in arr){
    console.log(arr[item])
}
/*
    Anderson
    Rafaela
    Emanoel
    Lucas
*/


let objeto = {
    nome: "Anderson da Silva",
    idade: 19,
    genero: "masculino"
}

for(chave in objeto){
    console.log(chave)
}
/*
    nome
    idade
    genero
*/
// O operador "in" nesses dois casos está verificando se o index ou a chave de um pobjeto existe, caso exista, ele atribui a variável de escopo local "chave" ou no caso do array "item"...

// Novamente usando uma gambiarra podemos ver os valores dessas chaves
for(chave in objeto){
    console.log(objeto[chave])
}
/*
    Anderson da Silva
    19
    masculino
*/