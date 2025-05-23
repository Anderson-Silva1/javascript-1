// setInterval(() => {
//     console.log("Execultando setInterval a cada 2 segundos")
// }, 2000 /* Esse é o temppo de esperapara o setTimeout execultar a ARROW Function... Esse tempo está em milisegundos, por isso que usamos o 2000, pois 2000 milisegundos é 2 segundos */)

// Ou seja, fizemos um looping infinito...

// podemos parar a execulção dessa função usando o "clear", para isso criamos um variável recebendo essa função de alta ordem:

let segundos = 0
let setIntervalID = setInterval(() => {
    segundos += 2
    console.log(`Execultando setInterval a cada ${segundos} segundos`)
    if(segundos >= 10) clearInterval(setIntervalID)
}, 2000)

// Aqui estamos definindo nosso setInterval para execultar apenas 10 segundos

// Execultando setInterval a cada 2 segundos
// Execultando setInterval a cada 4 segundos
// Execultando setInterval a cada 6 segundos
// Execultando setInterval a cada 8 segundos
// Execultando setInterval a cada 10 segundos