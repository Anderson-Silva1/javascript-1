/*export default*/ class Pessoa {
    constructor(nome, idade, altura, sexo){
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.sexo = sexo
    }
}

// Podemos exportar dentro da classe, na hora da definição usando o export default antes da class

// Pedemos exportar nossa classe usando o export default <O que será exportado>

export default Pessoa