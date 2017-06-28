const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const WEB_DEV_SERVER_PORT=9000;

const config = Merge(CommonConfig, {
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
    ],
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

    ]
});

module.exports = config;
