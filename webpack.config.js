var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'main.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        extansions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        root: './ts',
        modulesDirectories: ['node_modules', 'ts']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}
