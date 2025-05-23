const path = require('path');

module.exports = {
    mode: 'development', // Ou 'production' dependendo do ambiente

    entry: './src/index.js', // Caminho de entrada do seu código principal
    
    output: {
        filename: 'bundle.js', // Nome do arquivo de saída
        path: path.resolve(__dirname, 'dist'), // Diretório de saída
        publicPath: '/' // Onde o Dev Server deve servir os arquivos
    },

    module: {
        rules: [
            {
                test: /\.m?js$/, // Verifica todos os arquivos .js ou .mjs
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'] // Usa o preset-env do Babel para transpilação
                    }
                }
            }
        ]
    },

    resolve: {
        fallback: {
            "domain": require.resolve("domain-browser"),
            "fs": false,
            "path": false
        }
    },

    devtool: 'source-map', // Gera um source map mais detalhado e legível

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Define a pasta estática (geralmente "dist")
        },
        compress: true, // Habilita a compressão para um carregamento mais rápido
        port: 9000, // Porta onde o servidor será executado (pode ser qualquer porta disponível)
        open: true, // Abre automaticamente o navegador ao iniciar o servidor
        hot: true, // Habilita Hot Module Replacement para recarregar o código automaticamente
    }
};