const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const extractCSS = new ExtractTextPlugin('bundle.css')

module.exports = {
    entry: './src/entry.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', query: { presets: ['es2015', 'react'] }, exclude: /node_modules/ },
            { test: /\.css$/, loader: extractCSS.extract(['css']) },
            { test: /\.(scss|sass)$/, loader: extractCSS.extract(['css?modules', 'sass']) },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.(png|svg|jpg|ttf|eot|woff|woff2)$/, loader: 'file' }
        ]
    },

    plugins: [
        extractCSS
    ],

    devtool: 'source-map'
}
