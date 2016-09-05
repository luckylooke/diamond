var webpack = require('webpack'),
    entry = './src/diamond.source.js';

module.exports = {
    entry: {
        'dragon': entry,
        'dragon.min': entry
    },
    library: 'dragon',
    libraryTarget: 'umd',
    umdNamedDefine: true, // https://webpack.github.io/docs/configuration.html#output-umdnameddefine
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};