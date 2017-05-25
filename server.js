var path = require('path');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var compiler = webpack(webpackConfig);

const WEB_DEV_SERVER_PORT=9000;
const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
var server = new WebpackDevServer(compiler, {
    // webpack-dev-server options

    contentBase: DIST_DIR+'/app',
    // Can also be an array, or: contentBase: "http://localhost/",

    hot: true,
    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a "webpackHotUpdate" message is sent to the content
    // Use "webpack/hot/dev-server" as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

    historyApiFallback: false,
    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.

    compress: true,
    // Set this if you want to enable gzip compression for assets

    /*proxy: {
        "**": "http://localhost:9090"
    },*/
    // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
    // Use "**" to proxy all paths to the specified server.
    // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
    // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).

    setup: function(app) {
        // Here you can access the Express app object and add your own custom middleware to it.
        // For example, to define custom handlers for some paths:
        // app.get('/some/path', function(req, res) {
        //   res.json({ custom: 'response' });
        // });
    },

    // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
    staticOptions: {
    },

    clientLogLevel: "info",
    // Control the console log messages shown in the browser when using inline mode. Can be `error`, `warning`, `info` or `none`.

    // webpack-dev-middleware options
    quiet: false,
    noInfo: false,
    lazy: true,
    filename: webpackConfig.output.filename,
    //watchOptions: {
        //aggregateTimeout: 300,
        //poll: 1000
    //},
    publicPath: webpackConfig.output.publicPath,
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true },
    compress: true
    /*https: {
        cert: fs.readFileSync("path-to-cert-file.pem"),
        key: fs.readFileSync("path-to-key-file.pem"),
        cacert: fs.readFileSync("path-to-cacert-file.pem")
    }*/
});
server.listen(WEB_DEV_SERVER_PORT, "localhost", function() {});
