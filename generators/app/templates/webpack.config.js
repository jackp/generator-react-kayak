/**
 * Webpack Configuration
 * http://webpack.github.io/docs/configuration.html
 */
var path = require("path");
var webpack = require("webpack");

var AUTOPREFIXER_BROWSERS = ["last 2 version"];

module.exports = {
  // Entry point(s) for the bundle
  entry: ["./src/index.js"],

  output: {
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
        loader: "style!" +
                "css!" +
                "autoprefixer?{browsers:" + JSON.stringify(AUTOPREFIXER_BROWSERS) + "}!" +
                "sass?outputStyle=expanded"
      },
      {
        test: /\.(gif|png|jpg|svg|eot|woff2|ttf|woff)(\?|$)/,
        loader: "url?limit=8192"
      }
    ]
  },

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

  // Dev server configuration
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    host: "localhost",
    port: process.env.PORT || 3000,
    contentBase: "./src"
  },

  // Plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  // General configuration
  debug: true,
  devtool: "eval"
};
