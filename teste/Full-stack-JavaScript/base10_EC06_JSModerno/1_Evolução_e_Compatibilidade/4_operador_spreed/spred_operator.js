let arr = [1, 2, 3, 4, 5]

// Sem o spread operator:
console.log(arr) // [ 1, 2, 3, 4, 5 ] => Retornou a lista

// Com o spread operator:
console.log(...arr) // 1 2 3 4 5 => Retornou cadaelemento da lista como um elemento único

// * Nesse caso o spread desempacotou o array "arr", tirou cada elemento e tornou ele como um elemento individual
// * Ao invéz de termos um Array de números, teremos apenas números]
// * Seria a mesma coisa de dar um console.log() em cada número
console.log(1, 2, 3, 4, 5) // 1 2 3 4 5


// Podemos adicionar elementos dentro de um array usando o spread operator:
let newArr = [...arr, 6, 7, 8, 9, 10]
console.log(newArr) // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// Seria a mesma coisa de fazer isso:
console.log([ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ])

// Caso não usassemos o spread, ficaria assim:
console.log([arr, 6, 7, 8, 9, 10]) // [ [ 1, 2, 3, 4,  5 ], 6, 7, 8, 9, 10 ] => Foi retornado um array de array, mas não queremos isso, queremos concarenar o array com esses dados


// Podemos também concarenar arrays com o spread:
let arr2 = ["Banana", "Maçã"]
concatArray = [...arr, ...arr2]
console.log(concatArray) // [ 1, 2, 3, 4, 5, 'Banana', 'Maçã' ] => COncatenamos 2 arrays diferentes usando o Spread


// Podemos usar o spread em funções:
function speedUp (velocity, aceleration) {
    console.log(velocity + aceleration)
}
let arr3 = [50, 20]
speedUp(...arr3) // 70 => Estamos basicamente passando como parâmetro os valores: 50 e 20 da nossa lista

// dará errado se quisermos passar o array como parâmetro sem o spread:
speedUp(arr3) // 50,20undefined => Basicamenteestamos passando pelo primeiro parâmetro o array arr3[50, 20] e no segundo parâmetronãoestamos passando nada, por isso o valor undefined