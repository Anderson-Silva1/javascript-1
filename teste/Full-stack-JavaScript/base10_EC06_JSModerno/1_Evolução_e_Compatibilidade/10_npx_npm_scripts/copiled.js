class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}
class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`${this.nome} faz um som.`);
  }
}
