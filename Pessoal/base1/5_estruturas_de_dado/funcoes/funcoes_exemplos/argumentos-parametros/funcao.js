const funcao1 = (/* Parâmetros */) => {
  return;
};

funcao1(/* Argumentos */);

/* ------------------------------------------------- */

const funcao2 = (users, data = "10/20/2023") => {
  console.log(users);
  console.warn(data);
  //   console.group("Teste 123");
  //   console.log(users);
  //   console.warn(data);
  //   console.groupEnd();
};

const usuarios = [
  { nome: "Anderson", idade: 20 },
  { nome: "Rafaela", idade: 24 },
];

const data = "25/10/2025";

funcao2(usuarios);
funcao2(usuarios, data);
