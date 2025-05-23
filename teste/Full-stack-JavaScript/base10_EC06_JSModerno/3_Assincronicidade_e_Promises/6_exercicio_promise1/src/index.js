import LigarCarro from "./LigarCarro"

let listCarr = [new LigarCarro("Corola", 100, 50), new LigarCarro("4x4", 140, 100), new LigarCarro("Fusca", 200, 40)]

console.log(carro1.LigarCarro())
console.log(carro2.LigarCarro())
console.log(carro3.LigarCarro())

function altorizarPartida(){
    return new Promise((response, reject) => {
        for(carro in listCarr){
            if( carro.LigarCarro() >= 30 ){
                response(carro)
            } else{
                reject(carro)
            }
        }
    })
}

altorizarPartida().then(response => {
    console.log(`${response.nome}: Partida autorizada! / ${teste}`)
})