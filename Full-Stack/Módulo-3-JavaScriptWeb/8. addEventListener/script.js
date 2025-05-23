const button = document.querySelector('button');
const select = document.querySelector('select');
const input = document.querySelector('input');

button.addEventListener('click', function() {
    console.log("Este botão foi clicado");
});

select.addEventListener('change', function() {
    console.log(select.value);
});

// Podemso fazer tantop dessa forma acima quanto colocarmos uma função no lado de fora da nossa ".addEventListener()"


function input1() {
    console.log("Este input foi clicado");
}

input.addEventListener('focus', input1);

// Dessa forma acima vemos como podemos usar o nome de uma função para chamar ela dentso da addEventListener

