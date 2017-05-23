const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in pluginsar path = 
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
    //devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist/app"),
        compress: true,
        port: 9000
    },
    entry: [SRC_DIR + '/app/index.js'],
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.[hash].js',
        publicPath: './'
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: [
                    { loader:'babel-loader'},
                    { loader: 'eslint-loader'}
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use:  [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    { loader: 'sass-loader'}
                ]
            }
        ]
    },
    plugins:[
        //new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'My title',
            showErrors: true,
            xhtml: true,
            inject: 'body', //true | 'head' | 'body' | false
            //hash: true, //using the hash in file name in webpack config no need for this
            minify: {},
        })
    ]
};

module.exports = config;
