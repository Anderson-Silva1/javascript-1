const json = `{
    "nome": "Terra",
    "caracteristicasFisicas": {
        "areaTotal": 510072000,
        "diametroEquatorial": 12756.2
    },
    "cores": ["Azul", "Verde", "Marrom"],
    "inicioRotacao": "00:00",
    "fimRotacao": "23:59"
}`

objeto_json = JSON.parse(json)

console.log(objeto_json)
/* 
    {
        nome: 'Terra',
        caracteristicasFisicas: { areaTotal: 510072000, diametroEquatorial: 12756.2 },
        cores: [ 'Azul', 'Verde', 'Marrom' ],
        inicioRotacao: '00:00',
        'fimRotação': '23:59'
    }
*/

// Com isso podemos usar o objeto para pegar os dados do JSON

console.log(objeto_json.nome) // Terra
console.log(objeto_json.caracteristicasFisicas.areaTotal) // 510072000
console.log(objeto_json.caracteristicasFisicas.diametroEquatorial) // 12756.2
console.log(objeto_json.cores[0]) // Azul
console.log(objeto_json.cores[1]) // Verde
console.log(objeto_json.cores[2]) // Marrom
console.log(objeto_json.inicioRotacao) // 00:00
console.log(objeto_json.fimRotacao) // 23:59
