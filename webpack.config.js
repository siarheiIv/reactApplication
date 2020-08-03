const path = require('path');
const sass = require('node-sass');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function (env, options) {

    const isProd = options.mode === 'production';

    const config = {
        mode: isProd ? 'production' : 'development',
        context: path.join(__dirname, "src"),
        entry: "./index.js",
        devtool: isProd ? "none" : "source-map",
        output: {
            filename: "./bundle.js",
            path: path.join(__dirname, "dist"),
        },
        plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
            title: 'Webpack Task2',
            filename: '../dist/index.html'
        })],
        module: {
            rules: [
                {
                    test: /.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        { loader: "babel-loader" }
                    ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                      // Creates `style` nodes from JS strings
                      'style-loader',
                      // Translates CSS into CommonJS
                      MiniCssExtractPlugin.loader, 'css-loader',
                      // Compiles Sass to CSS
                      'sass-loader',
                    ],
                  },
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            open: true,
            port: 8986,
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
    }
    return config;
}