/**
 * Webpack Configuration
 * http://webpack.github.io/docs/configuration.html
 */
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var AUTOPREFIXER_BROWSERS = ["last 2 version"];

module.exports = {
  // Entry point(s) for the bundle
  entry: ["./src/index.js"],

  // Output
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    publicPath: "/assets/",
    filename: "main.js"
  },

  // Loaders
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "react-hot!babel"
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract("style",
                "css!" +
                "autoprefixer?{browsers:" + JSON.stringify(AUTOPREFIXER_BROWSERS) + "}!" +
                "sass?outputStyle=expanded")
      },
      {
        test: /\.(gif|png|jpg|svg|eot|woff2|ttf|woff)(\?|$)/,
        loader: "url?limit=8192"
      }
    ]
  },

  // Plugins
  plugins: [
    new ExtractTextPlugin("main.css"),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "../index.html",
      inject: true,
      minify: true,
      hash: true
    })
  ],

  // Path resolving, aliases
  resolve: {
    extensions: ["", ".js"],
    alias: {
      actions: path.resolve(__dirname, "src/actions"),
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      mixins: path.resolve(__dirname, "src/mixins"),
      stores: path.resolve(__dirname, "src/stores"),
      styles: path.resolve(__dirname, "src/styles")
    }
  },
  devtool: "source-map"
};
