// Aqui importamos nossa class Pessoa do arquivo Pessoa.js, e como estamos exportando ela como DEFAULT basta importar o arquivo completo
import Banana from "./Pessoa";
// "Pessoa" se refere a palavra que será usada nesse código para referênciar o que está sendo exportado na pasta "./Pessoa", seria uma espécie de "aliás"... O que significa que poderia ser a palavra Banana, mas teríamos que usar essa mesma palavra dentro de nosso código
// "./Pessoa" se refere ao caminho onde essa class está... Não colocamos ".js" pq o JS já espera um arquivo JS

let pessoa1 = new Banana("Anderson", 19, 1.65, "Homen")

console.log(pessoa1)