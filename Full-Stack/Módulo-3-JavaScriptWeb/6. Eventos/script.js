function mensagem() {
    alert("Fui pressionado")
    // Estamos colocando diretamente dentro do HTML
}

const botao = document.querySelector('#sendoChamadoPeloJs')

botao.onclick = () => {
    alert('Teste')
}