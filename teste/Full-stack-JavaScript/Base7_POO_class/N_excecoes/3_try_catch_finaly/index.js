class Nave {
    constructor(name){
        this.name = name
        this.fire = 5
    }

    tiro(){
            if (this.fire <= 0){
                throw new Error(`Arma de ${this.name} está sem munição`) // Estamos instanciando um erro no nosso código
            } else {
                console.log('Bang!')
            }
            this.fire--
    }

    recarregar(){
        this.fire = 5
        console.log('Arma recarregada!!')
    }
}

let star = new Nave ("Star")

console.log(star)


try {
    star.tiro()
    star.tiro()
    star.tiro()
    star.tiro()
    star.tiro()
    star.tiro()
    console.log("Estamos TRY")

} catch (error) {
    console.log(error.message) // O THROW enviou o erro(instância da class Error) para esse CATCH, e nele podemos acessar a propriedade: message, para vermos a mensagem de erro
    console.log("Estamos CATCH")
} finally {
    star.recarregar() // Essa instrução sempre vai ser execultada, independentemente do resultado do TRY
    console.log("Estamos FINALY")
}

console.log(star)

/*
    Nave { name: 'Star', fire: 5 }
    Bang!
    Bang!
    Bang!
    Bang!
    Bang!
    Arma de Star está sem munição
    Estamos CATCH
    Estamos FINALY
    Nave { name: 'Star', fire: 5 }
*/