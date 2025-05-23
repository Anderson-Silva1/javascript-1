const path = require("path")

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: "[name].bandle.js",
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            }
        ]
    },

    
    watch: true,

    // Esse é o jeito antigo de fazer as coisas
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     watchContentBase: true,
    //     liveReload: true
    // }

    // Esse é o jeito mais atualizado de configurar um servidor webpack
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),  // Serve os arquivos estáticos da pasta 'dist'
            watch: true  // Observa alterações na pasta
        },
        liveReload: true,  // Habilita o live reload
        port: 3000,  // Porta do servidor, se necessário
        open: true,  // Abre o navegador automaticamente
    },
}