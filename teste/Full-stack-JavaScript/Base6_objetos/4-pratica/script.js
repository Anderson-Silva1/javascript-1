let nave = {
    velocidade: 0,
    aumentarVelocidade: function(aceleration){
        this.velocidade += aceleration
    }
}

function registrarNome(){
    nave.name = prompt('Qual o nome da nave? > ')
    nave.tipo = prompt('Qual o tipo da nave? > ')
    nave.velocidadeMax = Number(prompt('Qual a velocidade máxima da nave? (km/s) > '))
}

function acelerar(){
    let aceleraration = Number(prompt('Quando você quer acelerar? (km/s) > '))
    nave.aumentarVelocidade(aceleraration)
    if(nave.velocidade > nave.velocidadeMax){
        alert('VELOCIDADE MÁXIMA DA NAVE ULTRAPASSADA\nVelocidade da nave: ' + nave.velocidade + "km/s")
        alert('Velocidade máxima da nave: ' + nave.velocidadeMax + "km/s")
    }
}

function explodiu(velocidade, velocidadeMax){
    if(velocidade - velocidadeMax >= velocidadeMax * 0.50){
        alert('A nave explodiu!!!')
    } else if (velocidade - velocidadeMax < velocidadeMax * 0.50){
        alert('Foi por pouco!!!, quase explodiu...')
    }
}

function parar(){
    explodiu(nave.velocidade, nave.velocidadeMax)
    alert(`Nome: ${nave.name}\nTipo: ${nave.tipo}\nVelocidade da nave: ${nave.velocidade}km/s\nVelocidade máxima da nave: ${nave.velocidadeMax}km/s`)
    nave.velocidade = 0
}

function menu(){
    let opcao

    do {
        opcao = prompt('O que deseja fazer?\n1 - Acelerar a nave?\n2 - Parara nave?')
        switch (opcao){
            case '1':
                acelerar()
                break
            case '2':
                parar()
                break
            default:
                alert('Opção inválida!!')
        }
    } while (opcao != '2')
}

registrarNome()
menu()