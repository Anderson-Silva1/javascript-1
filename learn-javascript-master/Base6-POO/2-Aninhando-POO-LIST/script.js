// Aninhando POO + Lista / Matrix

// POO com List
const persona = {
    name: "Anderson da Silva Valentim",
    age: 23,
    job: "Developer Full-Stack",
    wolman: "Rafaela Alves de Araújo",
    children: ["Azafe Alves da Silva Valentim", "Acsa Alves da Silva Valentim"],
    fatherAndMother: ["Jose Francisco Valentim da Silva", "Dayane Lopes da Silva Valentim"]
}
// Vamos adicionar mais um filho a essa lista, Aixa Alves da Silva Valentim
persona.children.push("Aixa Alves da Silva Valentim") // Como estamos lidando com Arrays, podemos usar o metodo "push" para adicionar mais um ítem ao final do Array...

console.log(persona.children)

// Dentro desse Objeto "persona" temos varias chaves, e em duas delas temos o valor de LISTA... Mostando que podemos certamente juntar as Objetos com Listas


// List com POO

const studants = [
    {
        name: "Anderson",
        callNumber: 1
    },
    {
        name: "Rafaela",
        callNumber: 2
    },
    {
        name: "Emanoel",
        callNumber: 3
    },
    {
        name: "Adriano",
        callNumber: 4
    },
    [1,2,3,4]
]

// Vamos adicionar no estudante "Anderson" o sobre nome "Silva" 
studants[0].name = "Anderson Silva" // Aqui adicionamos o "Silva" ao estudante "Anderson" que está no índice 0 do Array "studants"

console.log(studants[0].name) // Estamos dando um colnsole.log no valor da chave name "Anderson Silva" que está dentro do índice "0" do Array "studants"


// POO com POO

const persona2 = {
    name: "Anderson",
    address: {
        country: "Brasil",
        state: "Ceará",
        city: "Fortaleza",
        neighborhood: "Siqueira",
        Street: {
            name: "Serena",
            number: 27,
            complement: "Miguel Arraes"
        }
    }
}

// Vamos mudar o nome do Bairro para "Bom Jardim"
persona2.address.neighborhood = "Bom Jardim"

console.log(persona2.address.neighborhood)

// Conseguimos mostrar que podemos ter POO dentro de POO