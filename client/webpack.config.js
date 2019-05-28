const path = require('path');

// Módulo do Node.js configurado
module.exports =  { 
    entry: './app-src/app.js',
    output: {
        filename: 'bundle.js',
        path:   path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }]
    }
}