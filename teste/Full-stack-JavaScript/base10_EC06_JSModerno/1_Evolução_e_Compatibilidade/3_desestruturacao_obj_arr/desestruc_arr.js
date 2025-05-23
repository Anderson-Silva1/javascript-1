let arr = [1, 2, 3, 4, 5]

// Antes sem Desestruturação:
var pos1 = arr[0]
var pos2 = arr[1]
var pos3 = arr[2]
var pos4 = arr[3]
var pos5 = arr[4]

console.log(pos1, pos2, pos3, pos4, pos5) // 1 2 3 4 5

// Depois com desestruturação

var [pos1, pos2, pos3, pos4, pos5, pos6] = arr
console.log(pos1, pos2, pos3, pos4, pos5, pos6) // 1 2 3 4 5 undefined

// Obs: a posição 6 do nosso array não existe, por isso é gerado undefined

// podemos usar a desestruturação dentro de uma função:
function destruct([ pos1, pos2, pos3, pos4, pos5 ]){
    console.log( pos1, pos2, pos3, pos4, pos5 )
}

destruct(arr) // 1 2 3 4 5
