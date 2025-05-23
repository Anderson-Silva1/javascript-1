const botao = document.querySelector('button') // Declarando uma variável com o valor: Elemento Button
const select = document.getElementById('currency-select') // declarando uma variável com o valor: Elemento select
const dolar = 0.20 // Declarando uma variável com o valor do dólar
const euro = 0.18 // Declarando uma variável com o valor do euro
const bitcoinExchangeRate = 0.0000031 // Declarando uma variável com o valor do bitcoin

const convertValores = () => {
    const inputReais = document.querySelector('#valor-real').value; // Estamos pegando o valor do nosso input 
    const realValueText = document.querySelector('#real-value-text'); // Estamos pegando o elemento parágrafo com o id "real-value-text"

    // realValueText.innerHTML = inputReais
    // Estamos colocando o valor do nosso input id: valor-real, e atribuindo ao parágrafo id: real-value-text
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReais);
    // Neste código acima estamos fazendo a mesma coisa que o codigo anterior comentado,  Estamos colocando o valor do nosso input id: valor-real, e atribuindo ao parágrafo id: real-value-text... Porém estamos também formatando nosso resultado para estar de cordo com o padrão de escrita da moeda brasileira


    const currencyValueText = document.querySelector('#currency-value-text'); // Estamos pegando o elemento parágrafo com o id "currency-value-text"

    if (select.value === "US$ Dólar americano") {
        // currencyValueText.innerHTML = inputReais / dolar 
        // Estamos pegando o valor do input id: valor-real, multiplicando pelo valor da variável dólar e atribuindo o resultado ao parágrafo id: currency-value-text
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: 'USD',
        }).format(inputReais * dolar)
        // Neste código acima estamos fazendo a mesma coisa que o codigo anterior comentado,  Estamos pegando o valor do input id: valor-real, multiplicando pelo valor da variável dólar e atribuindo o resultado ao parágrafo id: currency-value-text... Porém estamos também formatando nosso resultado para estar de cordo com o padrão de escrita da moeda americana
    } else if (select.value === "€ Euro") {
        // currencyValueText.innerHTML = inputReais / euro
        // Estamos pegando o valor do input id: valor-real, multiplicando pelo valor da variável euro e atribuindo o resultado ao parágrafo id: currency-value-text
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: 'EUR',
        }).format(inputReais * euro)
        // Neste código acima estamos fazendo a mesma coisa que o codigo anterior comentado,  Estamos pegando o valor do input id: valor-real, multiplicando pelo valor da variável euro e atribuindo o resultado ao parágrafo id: currency-value-text... Porém estamos também formatando nosso resultado para estar de cordo com o padrão de escrita da moeda da europa
    } else {
        // currencyValueText.innerHTML = inputReais / bitcoinExchangeRate
        // Estamos pegando o valor do input id: valor-real, multiplicando pelo valor da variável euro e atribuindo o resultado ao parágrafo id: currency-value-text
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais * bitcoinExchangeRate);
        // Neste código acima estamos fazendo a mesma coisa que o codigo anterior comentado,  Estamos pegando o valor do input id: valor-real, multiplicando pelo valor da variável euro e atribuindo o resultado ao parágrafo id: currency-value-text... Porém estamos também formatando nosso resultado para estar de cordo com o padrão de escrita da moeda bitcoin
    }
}

const selectChange = () => { // Função da nossa "select.addEventListener"
    const currencyName = document.getElementById("currency-name") // Declarando uma variável com o valor id "currency-name"
    const currencyImage = document.getElementById("currency-image") // Declarando uma variável com o valor id "currency-image"

    // Criamos uma estrutura de repetição para definir o nome e a imagem de cada option do select
    if (select.value === "US$ Dólar americano") {  // Se o valor do id "currency-name" for igual a string "US$ Dólar americano", vai:   

        currencyName.innerHTML = "Dólar americano" // Sobrepor o nome da id "currency-name" já escrito para "Dólar americano"

        currencyImage.src = "./src/assets/eua.png" // Sobrepor a imagem da id "currency-image" já colocada em HTML para a imagem "eua.png"
    } else if (select.value === "€ Euro") { // Se o valor do id "currency-name" for igual a string "€ Euro", vai:   

        currencyName.innerHTML = "Euro" // Sobrepor o nome da id "currency-name" já escrito para "Euro"

        currencyImage.src = "./src/assets/euro.png" // Sobrepor a imagem da id "currency-image" já colocada em HTML para a imagem "euro.png"
    } else { // Caso nenhuma das opções acima seja verdade, vai:

        currencyName.innerHTML = "BitCoin" // Sobrepor o nome da id "currency-name" já escrito para "BitCoin"

        currencyImage.src = "./src/assets/bitcoin.png" // Sobrepor a imagem da id "currency-image" já colocada em HTML para a imagem "bitcoin.png"
    }

    convertValores()
}
botao.addEventListener('click', convertValores) // Declarando um "ouvidos" para nossa variável botão com a função "convertValores"

select.addEventListener('change', selectChange) // Declarando um "ouvidos" para nossa variável select com a função "change", que vai marcar onde está selecionada determinada opção.