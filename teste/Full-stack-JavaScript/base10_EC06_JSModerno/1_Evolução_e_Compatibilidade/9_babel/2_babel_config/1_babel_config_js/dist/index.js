"use strict";

require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
var numeros = [1, 2, 3];
var maisNumeros = [].concat(numeros, [4, 5]);
console.log(maisNumeros); // [1, 2, 3, 4, 5]

console.log("teste 123");

// `Teste 123`

var promise = Promise.resolve();