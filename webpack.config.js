var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;


module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'main.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        root: './ts',
        modulesDirectories: ['node_modules', 'ts']
    },
    module: {
        loaders: [
            {   test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {   test: /\.sass$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap!sass?sourceMap&indentedSyntax'
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}
