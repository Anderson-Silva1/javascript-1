console.log("Hello World"); // SAÍDA: Hello World

console.log(10 + 20); // SAÍDA: 30

// Saída ERRO
console.error("ERRO teste");

// Saída ALERTA
console.warn("ERRO teste");

// Saída GRUPO
console.group("Teste");
console.log("Normal");
console.warn("Alerta");
console.error("Error");
console.info("Teste");
console.groupEnd("Teste");

const users = [
  { nome: "Anderson", idade: 20 },
  { nome: "Anderson", idade: 20 },
  {
    nome: "Anderson",
    idade: {
      antes: 10,
      depois: 20,
    },
  },
  { nome: "Anderson", idade: 20 },
  { nome: "Anderson", idade: 20 },
  { nome: "Anderson", idade: 20 },
  { nome: "Anderson", idade: 20 },
  { nome: "Anderson", idade: 20 },
];

const users2 = { nome: "Anderson", idade: 20 };

const users3 = ["Anderson", 20];

// Saída TABELA: Lista de Objetos
console.table(users);

// Saída TABELA: Objeto
console.table(users2);

// Saída TABELA: Lista
console.table(users3);

console.assert(2 + 2 === 5, "Isso é um erro");
