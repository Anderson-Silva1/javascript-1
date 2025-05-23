class Planet {
    constructor(name, sufaceArea){
        this.name = name
        this.sufaceArea = sufaceArea
    }

    rotate(){
        console.log("Rotação feita!!")
        console.log('Estamos na Classe Planet do arquivo Planet.js')
    }
}

module.exports = Planet