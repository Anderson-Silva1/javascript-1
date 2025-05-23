let velocityNave = 0

const name = prompt("Digite o nome do piloto")

const newVelocityNave = prompt("Qual a velocidade da nave?")

let confirmacao = confirm("Confirma esta velocidade?")

if (confirmacao) {
    velocityNave = newVelocityNave
}

if (velocityNave <= 0) {
    alert("Nave parada. Considere partir e aumentar a velocidade")
} else if (velocityNave < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if (velocityNave >= 40 && velocityNave < 80) {
    alert("Parece uma boa velocidade")
} else if (velocityNave >= 80 && velocityNave < 100) {
    alert("Velocidade alta, considere diminuir")
} else if (velocityNave >= 100) {
    alert("velocidade perigosa. Controle automático reforçado") 
} else {
    alert("Impossível de cálcular")
}

alert(`Nave de ${name} está na a ${newVelocityNave} m/s`)