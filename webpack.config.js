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
            { test: /\.js$/, loader: 'babel', query: { presets: ['es2015', 'react', 'stage-0'] }, exclude: /(node_modules|react-css-themr)/ },
            { test: /\.css$/, loader: extractCSS.extract(['css']) },
            { test: /\.(scss|sass)$/, loader: extractCSS.extract(['css?modules&sourceMap', 'sass?sourceMap']) },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.(png|svg|jpg|ttf|eot|woff|woff2)$/, loader: 'file' }
        ]
    },

    sassLoader: {
        data: '@import "' + path.resolve(__dirname, 'src/theme.sass') + '";'
    },

    plugins: [
        extractCSS
    ],

    resolve: { fallback: path.join(__dirname, "node_modules") },
    resolveLoader: { fallback: path.join(__dirname, "node_modules") },

    devtool: 'source-map'
}
