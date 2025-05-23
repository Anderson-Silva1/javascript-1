// slice => Esse é um método onde conseguimos fatiar um array
// Precisamos atribuir ele a uma variável
// Ele cria um novo array, por isso temos que criar uma nova variável
// Ele contá apartir do índice

lista_ofc = [
  "Anderson",
  "Rafaela",
  "João",
  "Mateus",
  "Lucas",
  "Rafael",
  "Matias",
];

lista1 = lista_ofc.slice(1);
lista2 = lista_ofc.slice(4);
lista3 = lista_ofc.slice(6);

console.log(
  `Esses são exemplo do que o slice pode fazer: O index 0 passou a ser: "${lista1[0]}" e não: "${lista_ofc[0]}"`
);
console.log(
  `Esses são exemplo do que o slice pode fazer: O index 0 passou a ser: "${lista2[0]}" e não: "${lista_ofc[0]}"`
);
console.log(
  `Esses são exemplo do que o slice pode fazer: O index 0 passou a ser: "${lista3[0]}" e não: "${lista_ofc[0]}"\n`
);

// Ele pode receber 2 parâmetros:
//      - incicio
//      - fim (Porém ele nunca vai mostrar o ultimo elemento)

lista4 = lista_ofc.slice(1, 3); // O elemento do index 3 é o "Mateus", porém foi até o "João" que tem o index 2

console.log(`Esse é o slice com parâmetro final:\n${lista4}`);
console.log(
  `O index 0 passou a ser: "${lista4[0]}" e não: "${lista_ofc[0]} "\nO último index passou a ser: "${lista4[1]}" e não "${lista_ofc[6]}"`
);

lista5 = lista_ofc.slice();

console.log(`\nEsse é o slice sem parâmetro:\n${lista5}`);
