class Pessoa{
    constructor(nome, idade, altura, peso){
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.peso = peso
    }

    imc(){
        let altura_2 = this.altura * this.altura
        let calc_imc = this.peso / altura_2

        if (calc_imc < 18){
            console.log(`O imc de ${this.nome} é ${calc_imc} e está abaixo do peso`)
        } else if (calc_imc >= 18 && calc_imc <= 24){
            console.log(`O imc de ${this.nome} é ${calc_imc} e está no peso ideal`)
        } else if (calc_imc > 24){
            console.log(`O imc de ${this.nome} é ${calc_imc} e está acima do peso`)
        } else {
            console.log(`Erro de cálculo, verifique se as informaçõesestão corretas`)
        }

    }

    maiorIdade(){
        if(this.idade >= 18){
            console.log(`${this.nome} é maior de idade`)
        } else if(this.idade < 18){
            console.log(`${this.nome} é menor de idade`)
        }
    }
}

const pessoa1 = new Pessoa("Anderson", 17, 1.62, 49)

pessoa1.imc()
pessoa1.maiorIdade()