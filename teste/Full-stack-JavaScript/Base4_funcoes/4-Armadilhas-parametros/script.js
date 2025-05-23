// Armadilha 1
    // Função sem parâmetro
function semParametro(name, message = "Olá") {
    console.log(message + ", " + name)
}

semParametro() // Perceba que não estamos colocando os parâmetros dentro da chamada da função "semParametro"... Perceba também que temos 2 parâmetros: name e messeage... o Messagem tem valor padrão, mas o name não... o que indica que o message vai receber um valor normalmente, mas o name vai receber um undefined

// Armadilha 2
    // Ordem dos parâmetros

function speedUp(velocity, unit = "km/h", aceleration){
    let newVelocity = velocity + aceleration
    console.log(`Nova velocidade: ${newVelocity}${unit}`)
}

speedUp(60, "km/s", 30) // Olhe a ordem dos parâmetros, este está correto: Nova velocidade: 90km/s

speedUp(60, 30, "km/s") // Esta ordem esta incorreta :Nova velocidade: 60km/s30

speedUp(60, 30 ) // Tiramos um dos valores: Nova velocidade: NaN30

// Não dará o valor correto... Devemos ter cuidado com a ordem dos parâmetros... Um conselho, coloque os parâmetros com valores padrôes para o final, por motivos óbvios...
