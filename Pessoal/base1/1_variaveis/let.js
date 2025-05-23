let variavel = "Minha primeira variável";

for (var variavel_for = 0; variavel_for < 5; variavel_for++) {
  console.log(variavel_for);
}

var variavel_function = 10;

function variavel_let_function() {
  print(variavel_function);
}

variavel_let_function();

console.log(variavel_let_function); // ReferenceError: i is not defined
console.log(variavel_for); // ReferenceError: i is not defined
