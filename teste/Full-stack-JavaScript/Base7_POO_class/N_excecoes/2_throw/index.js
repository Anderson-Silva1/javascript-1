class Nave {
    constructor(name){
        this.name = name
        this.fire = 5
    }

    tiro(){
        console.log('Bang!')
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
console.log(star)

// Dessa forma estamos recebendo também tiros negativos, e não queremos isso...
/* 
    Nave { name: 'Star', fire: 5 }
    Bang!
    Bang!
    Bang!
    Bang!
    Bang!
    Bang!
    Nave { name: 'Star', fire: -1 }
*/