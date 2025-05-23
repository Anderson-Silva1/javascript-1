// sort => Esse método organiza um array, seja de forma numérica ou por alfabética

lista1 = [
  1, 4, 6, 3, 5, 7, 8, 76, 54, 3, 4, 56, 3, 2, 2, 4, 5, 76, 8, 6, 346, 256, 236,
  354, 435, 64, 5624, 5, 623, 43, 5413, 451, 23, 32,
]; // Lusta de números aleatórios

lista1_organizada = lista1.sort();

lista2 = [
  "d",
  "0",
  "2",
  "ç",
  "z",
  "x",
  "t",
  "c",
  "v",
  "y",
  "m",
  "j",
  "h",
  "s",
  "f",
  "t",
  "r",
  "c",
  "d",
  "a",
  "g",
]; // Lista de strings aleatórias

lista2_organizada = lista2.sort();

console.log(`Lista 1 desorganizada: \n${lista1}`);
console.log(`Lista 1 organizada: \n${lista1_organizada}`);
console.log(`Lista 2 desorganizada: \n${lista2}`);
console.log(`Lista 2 organizada: \n${lista2_organizada}`);
