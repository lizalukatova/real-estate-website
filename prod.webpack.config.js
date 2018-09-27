const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const basePath = __dirname;

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        path: path.join(basePath, 'dist'),
        publicPath: '/',
        filename: '[hash].[name].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
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
                }),
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    },
                }),
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                ecma:8,
                compress: {
                    warnings: false
                }
            }
        }),
        new ExtractTextPlugin({
            filename: '[hash].[name].css',
            disable: false,
            allChunks: true,
        }),
    ],
});