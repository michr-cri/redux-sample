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

const isExternal = function(module) {
    var context = module.context;

    if (typeof context !== 'string') {
        return false;
    }

    return context.indexOf('node_modules') !== -1;
};

const commonConfig = {
    context: SRC_DIR,
    devtool: 'source-map',
    entry: [
        //the entry point of our app
        './app/index.js'
    ],
    devServer: {
        historyApiFallback: true
    },
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
        new webpack.NoEmitOnErrorsPlugin(),
        //new webpack.optimize.UglifyJsPlugin(), //when using react it is best to use -p option while building with webpack for production which triggers minification
        new HtmlWebpackPlugin({
            template: 'index.html',
            title: 'My title',
            showErrors: true,
            xhtml: true,
            inject: 'body', //true | 'head' | 'body' | false
            minify: {}
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors-[hash].js',
            minChunks: function(module) {
                return isExternal(module);
            }
        }),
        extractSass,/*
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
        })*/
    ]
};


module.exports = commonConfig;
