class Pessoa {
    constructor(nome, idade, nacionalidade, profissao){
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
        this.profissao = profissao
    }

    mostrarIdade(){
        console.log(this.idade)
        console.log('Estamos na Class "Pessoa"\n')
    }

    mostrarIdadeAoQuadrado(){
        console.log(this.idade ** 2)
    }
}

class Capitao extends Pessoa {

    // Não temos costrutor aqui por que estamos importando o construtor de outra Class, no caso "Pessoa"

    mostrarNomeCapitao1(){
        console.log(this.nome)
        console.log('Estamos na Class "Capitao", usando o "this" para acessar as propriedades da Classe "Pessoa"\n')
    }

    mostrarNomeCapitao2(){
        console.log(Pessoa.nome) // Não podemos mais suar dessa forma, pois os atributos foram imprimidos na classe "Capitao" e não na Class "Pessoa"
        console.log('Estamos na Class "Capitao", usando a Class diretamente para acessar as propriedades da própria Classe "Pessoa"\n')
    }
}

let capitao1 = new Capitao('Anderson', 19, "Brasileiro", "Desenvolvedor") // Usamos o construtor da Classe "Pessoa" para criar os atriibutos da nossa class "Capitao" usando o recurso Herânca do POO

capitao1.mostrarIdadeAoQuadrado()

let capitao2 = new Capitao('Rafaela', 24, "Brasileira", "Designer") // Usamos o construtor da Classe "Pessoa" para criar os atriibutos da nossa class "Capitao" usando o recurso Herânca do POO

let capitao3 = new Capitao('Emanoel', 13, "Brasileiro", "Médico") // Usamos o construtor da Classe "Pessoa" para criar os atriibutos da nossa class "Capitao" usando o recurso Herânca do POO

capitao1.mostrarNomeCapitao1() // Métodos da Class "Capitao" que acessa os atributos do construtor da Class "Pessoa"
capitao1.mostrarNomeCapitao2() // Métodos da Class "Capitao" que acessa os atributos do construtor da Class "Pessoa"
capitao1.mostrarIdade() // Usamos o método criado na Class "Pessoa" na Class "Capitao" pelo recurso Herânça da POO

capitao2.mostrarNomeCapitao1() // Métodos da Class "Capitao" que acessa os atributos do construtor da Class "Pessoa"
capitao2.mostrarNomeCapitao2() // Métodos da Class "Capitao" que acessa os atributos do construtor da Class "Pessoa"
capitao2.mostrarIdade() // Usamos o método criado na Class "Pessoa" na Class "Capitao" pelo recurso Herânça da POO

capitao3.mostrarNomeCapitao1() // Métodos da Class "Capitao" que acessa os atributos do construtor da Class "Pessoa"
capitao3.mostrarNomeCapitao2() // Métodos da Class "Capitao" que acessa os atributos do construtor da Class "Pessoa"
capitao3.mostrarIdade() // Usamos o método criado na Class "Pessoa" na Class "Capitao" pelo recurso Herânça da POO
