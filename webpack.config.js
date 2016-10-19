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
            { test: /\.js$/, loader: 'babel', query: { presets: ['es2015'] }, exclude: /(external\/SearchJS)/ },
            { test: /\.css$/, loader: extractCSS.extract(['css']) },
            { test: /\.styl$/, loader: extractCSS.extract(['css', 'stylus']) },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.(png|svg|jpg|ttf|eot|woff|woff2)$/, loader: 'file' }
        ]
    },

    plugins: [
        extractCSS
    ],

    devtool: 'source-map'
}
