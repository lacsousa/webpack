const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');

let plugins = [];

if (process.env.NODE_ENV == 'production'){
    plugins.push(new babiliPlugin());
}

// Módulo do Node.js configurado
module.exports =  { 
    entry: './app-src/app.js',
    output: {
        filename: 'bundle.js',
        path:   path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }]
    },
    // plugins: plugins // No ES6 se a chave tem o mesmo nome da variável, pode-se omití-la
    plugins
}