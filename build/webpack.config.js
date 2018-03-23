const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, '../src/index'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'data-util-min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [
                'babel-loader'
            ]
        }]
    },
    plugins: [
        new UglifyJsPlugin()
    ]
}