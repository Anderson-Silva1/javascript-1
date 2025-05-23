function step02(passo, tempoEspera){
    setTimeout(()=>{
        console.log(`Passo ${passo}`)
    }, tempoEspera)
}

console.log('Passo 01')
step02("02", 2000)
console.log('Passo 03')
step02("05", 1000)
console.log('Passo 04')


// Passo 01
// Passo 03
// Passo 04
// Passo 05
// Passo 02

// Vemos que ele não seguiu o padrão linear para a execulção do código, e essa é a base do código assíncrono