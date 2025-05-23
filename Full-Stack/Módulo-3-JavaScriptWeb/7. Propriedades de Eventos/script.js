const botao_teste = document.querySelector("#button-test");

botao_teste.onclick = (propriedades) => {
  console.log(propriedades);
};

const elemento = document.querySelector("input");

let valor = "";

elemento.onkeypress = (event) => {
  console.log(event.key);
  valor += event.key;
};

console.log(valor);
