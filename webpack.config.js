const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

const mode = process.env.NODE_ENV;

module.exports = {
  mode: mode,
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ["file-loader"]
      }
    ]
  },
  // // Use to avoid errors in dev server for react-router-dom
  devServer: {
    historyApiFallback: true
  },
  optimization: {
    noEmitOnErrors: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};

// If not in production mode than will put thesee entry commands in unshift(front)
// It will go to entry, if not it will not get put into entry
if (process.env.NODE_ENV !== "production") {
  module.exports.entry.unshift("webpack-hot-middleware/client");
  module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
}
