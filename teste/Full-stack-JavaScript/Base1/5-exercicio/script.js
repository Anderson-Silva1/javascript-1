alert("Bem-vindo! A seguir pediremos que nos informe alguns dos seus dados")

let nome = prompt("Digite o seu nome por gentileza")

let age = prompt("Digite a sua idade")

let ageConfirmation = confirm("Sua idade é " + age + "?")

alert(`Nome: ${nome} \n Idade: ${age} \n Idade confirmada: ${ageConfirmation}`)