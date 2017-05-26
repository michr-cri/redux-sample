const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in pluginsar path =
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

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
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React
        'webpack-dev-server/client?http://localhost:'+WEB_DEV_SERVER_PORT,
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack/hot/only-dev-server',
        // this entry does not override devServer:hot:true option. If you are going to use this option don't use devServer:hot option
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        './app/index.js'
        //the entry point of our app
    ],
    output: {
        path: DIST_DIR,
        filename: 'bundle.[hash].js',
        publicPath: '/'
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
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000',
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
            minify: {},
        }),
        extractSass,
        new FaviconsWebpackPlugin({
            logo:'./assets/images/logo.png',
            // The prefix for all image files (might be a folder or a name)
            prefix: 'icons-[hash]/',
            // Emit all stats of the generated icons
            emitStats: false,
            // The name of the json containing all favicon information
            statsFilename: 'iconstats-[hash].json',
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin
            inject: true,
            // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
            background: '#fff',
            // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
            title: 'Webpack App',

            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: true
            }
        })
    ]
};

module.exports = config;
