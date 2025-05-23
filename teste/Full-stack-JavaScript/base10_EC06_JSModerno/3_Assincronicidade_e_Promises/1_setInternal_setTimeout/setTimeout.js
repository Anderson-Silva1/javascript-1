setTimeout(() => {
    console.log("Execultando setTimeout depois de 2 segundos")
}, 2000 /* Esse é o temppo de esperapara o setTimeout execultar a ARROW Function... Esse tempo está em milisegundos, por isso que usamos o 2000, pois 2000 milisegundos é 2 segundos */)

// podemos parar a execulção dessa função usando o "clear", para isso criamos um variável recebendo essa função de alta ordem:

let setTimeoutID = setTimeout(() => {
    console.log("Execultando setTimeout após 2 segundos")
}, 2000)

clearTimeout(setTimeoutID)
// console.log(setTimeoutID)