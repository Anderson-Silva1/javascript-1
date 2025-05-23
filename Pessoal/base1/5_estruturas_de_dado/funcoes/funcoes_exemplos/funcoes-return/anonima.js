// Função Anônima

const users = [
  {
    nome: "Anderson",
    age: 20,
  },
  {
    nome: "Rafaela",
    age: 24,
  },
];

const funcaoTradicional = function () {
  return users;
};

console.table(funcaoTradicional());
