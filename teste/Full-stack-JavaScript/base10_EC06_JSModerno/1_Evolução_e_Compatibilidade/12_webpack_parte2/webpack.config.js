const path = require("path");

module.exports = {
    entry: {
        index: "./src/index.js",
        galaxy: "./src/galaxy.js"
    },
    output: {
        filename: "[name].bandle.js",
        path: path.resolve(__dirname, 'dist')
    }
}