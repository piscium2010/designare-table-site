const CleanCSSPlugin = require('less-plugin-clean-css');
const merge = require('webpack-merge');
const common = require('./webpack.common')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge({
    mode: 'production',
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    output: {
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: false, modules: false }
                    },
                    {
                        loader: 'less-loader',
                        options: { plugins: [new CleanCSSPlugin({ advanced: true })] }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true,
        minimizer: [
            new TerserJSPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ]
}, common);
