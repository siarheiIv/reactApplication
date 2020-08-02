const path = require('path');
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
        plugins: [new MiniCssExtractPlugin()],
        optimization: {
            minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
          },
        module: {
            rules: [
                {
                    test: /.\js$/,
                    exclude: /node_modules/,
                    use: [
                        { loader: "babel-loader" }
                    ]
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            open: true,
        },
        watch: true,
        optimization: {
            minimize: true,
            minimizer: [
              new TerserPlugin({
                test: /.\js$/,
              }),
            ],
          },
    }
    return config;
}