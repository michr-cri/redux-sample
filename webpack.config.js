const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in pluginsar path =
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const WEB_DEV_SERVER_PORT=9000;

const config = {
    context: SRC_DIR,
    devtool: 'source-map',
    devServer: {
        publicPath: './',
        // match the output `publicPath`
        contentBase: path.join(__dirname, "dist/app"),
        // match the output path
        compress: true,
        inline: true,
        //hot: true, //Do not use --hot option or set this to true if you specified HMR in plugin section below
        // enable HMR on the server
        port: WEB_DEV_SERVER_PORT
    },
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React
        'webpack-dev-server/client?http://localhost:'+WEB_DEV_SERVER_PORT,
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        './app/index.js'
        //the entry point of our app
    ],
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.[hash].js',
        publicPath: './'
        // necessary for HMR to know where to load the hot update chunks
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
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options:{
                                sourceMap: true,
                                sourceComments: true
                            }
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NoEmitOnErrorsPlugin(),
        //new webpack.optimize.UglifyJsPlugin(), //when using react it is best touse -p option while building with webpack for production which triggers minification
        new HtmlWebpackPlugin({
            template: 'index.html',
            title: 'My title',
            showErrors: true,
            xhtml: true,
            inject: 'body', //true | 'head' | 'body' | false
            //hash: true, //using the hash in file name in webpack config no need for this
            minify: {},
        }),
        extractSass
    ]
};

module.exports = config;
