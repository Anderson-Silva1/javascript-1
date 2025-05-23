// IIFE - Immediately Invoked Function Expression)

// São funções que são alto execultaveis
// Esse tipo de função não precisa ser chamada

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

(function funcaoTradicional() {
  return users;
})();

(() => {
  return users;
})();

// !Não é permitido pela sintaxe do JavaScript
// (const funcaoTradicional = () => {
//     console.table(users);
//   })()
