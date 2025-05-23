const path = require("path");

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // Para evitar transpilar arquivos da pasta node_modules
                use: ["babel-loader"]
            }
        ]
    },

    watch: true, // Permite o modo de assistir

    // Configuração do servidor webpack
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),  // Serve os arquivos estáticos da pasta 'dist'
            watch: true  // Observa alterações na pasta
        },
        liveReload: true,  // Habilita o live reload
        port: 3000,  // Porta do servidor
        open: true,  // Abre o navegador automaticamente
    },
    mode: 'development' // Modo de desenvolvimento
};