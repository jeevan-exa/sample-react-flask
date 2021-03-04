const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const config = {
    mode: 'production',
    entry: {
        index: __dirname + '/navbar/index.js',
        // app: __dirname + '/navbar/App.js',
        // main: __dirname + '/navbar/Components/Main.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
    },
    'plugins': [
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            compressionOptions: { level: 7 }
          }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
 
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                'style-loader',
                'css-loader',
                'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                exclude: /node_modules/,
                use: [
                    {
                    loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'     
            }        
        ]
    }
};
module.exports = config;