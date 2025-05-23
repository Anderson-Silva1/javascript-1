class Pessoa{
    constructor(name, idade){
        this.name = name
        this.idade = idade
    }

    mostrarNome() {
        console.log(this.name)
    }

    mostrarIdade(){
        console.log(this.idade)
    }

    maiorIdade(){
        if(this.idade < 18){
            console.log(`${this.name} é menor de idade`)
        } else {
            console.log(`${this.name} é maior de idade`)
        }
        console.log()
    }
}

pessoa1 = new Pessoa('Anderson', 19)

pessoa1.mostrarNome() // Anderson
pessoa1.mostrarIdade() // 19
pessoa1.maiorIdade() // Anderson é maior de idade