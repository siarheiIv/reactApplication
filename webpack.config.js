const sass = require('node-sass');
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function (env, options) {

  const isProd = options.mode === 'production';
  // webpack will take the files from ./src/index
  const config = {
    mode: isProd ? 'production' : 'development',
    context: path.join(__dirname, "src"),
    devtool: isProd ? "none" : "source-map",
    entry: './index.js',

    // and output it into /dist as bundle.js
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
    },

    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.css']
    },

    module: {
      rules: [

        // we use babel-loader to load our jsx and tsx files
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(jpeg|jpg|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader'
        },

        // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
        {
          test: /\.s(a|c)ss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'resolve-url-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      open: true,
      port: 8996,
    },
    watch: true,
    optimization: isProd ? {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /.(js|jsx)$/,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    } : {},
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new MiniCssExtractPlugin()
    ]
  }
  return config;
};