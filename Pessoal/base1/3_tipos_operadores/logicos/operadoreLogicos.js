// OPERADORES LÓGICOS

// && -> E ou AND (FILHO OBEDIENTE)
// O operador && retorna true se ambos os operandos forem verdadeiros. Se um dos operandos for falso, ele retorna false.

// true && true = true -> Pai e mae deixou o menino sair, filho foi
{
    let pai = true
    let mae = true
    let filho = pai && mae

    console.log(filho)
}

// true && false = false -> pai deixou mas a mãe não deixou o filho sair, filho não foi
{
    let pai = true
    let mae = false
    let filho = pai && mae

    console.log(filho)
}

// false && false = false -> pai e mãe não deixaram o filho sair = filho não foi
{
    let pai = false
    let mae = false
    let filho = pai && mae

    console.log(filho)
}

// ----------------------------------------------------------------------------------------------------------------

// || -> OU ou OR (FILHO ESPERTINHO)
// O operador || retorna true se pelo menos um dos operandos for verdadeiro. Se ambos forem falsos, ele retorna false.

// true && true = true -> Pai e mae deixou o menino sair, filho foi
{
    let pai = true
    let mae = true
    let filho = pai || mae

    console.log(filho)
}

// true && false = false -> pai deixou mas a mãe não deixou o filho sair, filho foi pq o pai deixou
{
    let pai = true
    let mae = false
    let filho = pai || mae

    console.log(filho)
}

// false && false = false -> pai e mãe não deixaram o filho sair = filho não foi
{
    let pai = false
    let mae = false
    let filho = pai || mae

    console.log(filho)
}

// ----------------------------------------------------------------------------------------------------------------

// ! -> NEGAÇÃO ou NOT (FILHO REBELDE)
// O operador ! inverte o valor booleano de um operando. Se for true, retorna false, e vice-versa.

// true && true = true -> Pai e mae deixou o menino sair, filho não foi
{
    let pai = !true
    let mae = !true
    let filho = pai && mae

    console.log(`Rebelde ${filho}`)
}

// true && false = false -> pai deixou mas a mãe não deixou o filho sair, depende do operador... se for o && o filho não foi, se foi o || o filho foi
{
    let pai = !true
    let mae = !false
    let filho = pai && mae

    console.log(`Rebelde usando o &&: ${filho}`)
}

{
    let pai = !true
    let mae = !false
    let filho = pai || mae

    console.log(`Rebelde usando o ||:${filho}`)
}

// false && false = false -> pai e mãe não deixaram o filho sair = filho foi
{
    let pai = !false
    let mae = !false
    let filho = pai && mae

    console.log(`Rebelde ${filho}`)
}


// O operador lógico ! funciona de forma contrária, ou seja: true se torna false e false se torna true

{
    let sim = !true
    let nao = !false

    console.log(`Com o ! o sim se torna ${sim}`)
    console.log(`Com o ! o não se torna ${nao}`)
}

// ----------------------------------------------------------------------------------------------------------------

// Operador Nullish Coalescing Operator ??
// O operador ?? retorna o valor do lado direito se o valor do lado esquerdo for null ou undefined, caso contrário, retorna o valor do lado esquerdo.

let a = undefined
let b = 10

console.log(a ?? b) 
// Nesse caso acima, a = Undefined, o que faz o operador Nullish escolher o valor da direita