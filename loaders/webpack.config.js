const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.txt$/,
                use: [{
                    loader: path.resolve(__dirname, './transform-text-loader'),
                    options: {
                        string: "hehe",
                        regex: /hello/g
                    }
                }]
            },
            {
                test: /.(png|jpg)$/,
                use: [{
                    loader: path.resolve(__dirname, './image-loader')
                }]
            }
        ]
    } 
}