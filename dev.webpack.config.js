const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.webpack.config.js');

const basePath = __dirname;

const hotReloadingEntries = [
    'react-hot-loader/patch',
    './index.html',
    './css'
];

module.exports = webpackMerge.strategy({
    entry: 'prepend',
})(commonConfig, {
    // For development https://webpack.js.org/configuration/devtool/#for-development
    devtool: 'inline-source-map',
    entry: {
        app: hotReloadingEntries
    },
    output: {
        path: path.join(basePath, 'dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    devServer: {
        port: 8080,
        hot: true,
        historyApiFallback: true,
        //contentBase: path.join( __dirname, './src/index.html'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: false,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers:['ie >= 8', 'last 4 version']
                                    })
                                ],
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })),
            },
            {
                test: /\.css$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            minimize: false,
                            sourceMap: true
                        }
                    },
                })),
            },
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true,
            disable: false,
            //disable: true,
        }),
    ],
});
