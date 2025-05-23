const Planet = require('./planet')
const solarSistem = require('./sistema_solar')

let terra = new Planet("Terra", 560000)
let marte = new Planet("Marte", 52160000)
let venus = new Planet("Venus", 46340000)
let saturno = new Planet("Saturno", 560064400)

// console.log(terra) // Planet { name: 'Terra', sufaceArea: 560000 }
// terra.rotate() // Rotação feita!! \n Estamos na Classe Planet do arquivo Planet.js

solarSistem.planet.push(terra)
solarSistem.planet.push(marte)
solarSistem.planet.push(venus)
solarSistem.planet.push(saturno)

console.log(solarSistem.planet)
/*
    [
        Planet { name: 'Terra', sufaceArea: 560000 },
        Planet { name: 'Marte', sufaceArea: 52160000 },
        Planet { name: 'Venus', sufaceArea: 46340000 },
        Planet { name: 'Saturno', sufaceArea: 560064400 }
    ]
*/