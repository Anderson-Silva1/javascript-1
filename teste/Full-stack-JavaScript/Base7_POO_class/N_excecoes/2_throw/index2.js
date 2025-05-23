class Nave {
    constructor(name){
        this.name = name
        this.fire = 5
    }

    tiro(){
        console.log('Bang!')

        if (this.fire <= 0){
            throw new Error(`Arma de ${this.name} está sem munição`) // Estamos instanciando um erro no nosso código
        }

        this.fire--
    }
}

let star = new Nave ("Star")

console.log(star)
star.tiro()
star.tiro()
star.tiro()
star.tiro()
star.tiro()
star.tiro()
console.log(star) // Como tivemos um erro no nosso código, essa linha não foi execultada...

// Dessa forma estamos recebendo um erro causado pela falta de munição para tiro
/* 
    Nave { name: 'Star', fire: 5 }
    Bang!
    Bang!
    Bang!
    Bang!
    Bang!
    Bang!

    c:\Users\noteb\Documents\workspace\1_estudo\Estudo_Programacao\JavaScript\Full-stack-JavaScript\Base7_POO_class\N_excecoes\2_throw\index2.js:11
                throw new Error(`Arma de ${this.name} está sem munição`)
                ^

    Error: Arma de Star está sem munição
        at Nave.tiro (c:\Users\noteb\Documents\workspace\1_estudo\Estudo_Programacao\JavaScript\Full-stack-JavaScript\Base7_POO_class\N_excecoes\2_throw\index2.js:11:19)
        at Object.<anonymous> (c:\Users\noteb\Documents\workspace\1_estudo\Estudo_Programacao\JavaScript\Full-stack-JavaScript\Base7_POO_class\N_excecoes\2_throw\index2.js:26:6)
        at Module._compile (node:internal/modules/cjs/loader:1469:14)
        at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
        at Module.load (node:internal/modules/cjs/loader:1288:32)
        at Module._load (node:internal/modules/cjs/loader:1104:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
        at node:internal/main/run_main_module:28:49

    Node.js v20.17.0
*/