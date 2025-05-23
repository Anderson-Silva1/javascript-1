// Podemos exportar de forma nomeada dessa forma:
export function soma (a, b){
    return a + b
} // Para importarmos esse carinha precisamos usar o seu próprio nome...
// Dessa forma nãoconseuimos usar ALIÁS aqui dentro... Mas podemos usar dentro do arquivo de importação desse módulo ou função


// Porém podemos exportar de forma nomeada também dessa forma:

// Criamos a função
function mult(a, b){
    return a * b
}

// Podemos usar um aliás para  renomear nosso export nomeado
export { mult }
