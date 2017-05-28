'use strict';

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin({ filename: '[name].css', allChunks: true });
const extractSass = new ExtractTextPlugin({ filename: '[name].css', allChunks: true });

const CDN_PATH = 'localhost';

const webpackConfig = {
	output: {
		path: path.resolve(__dirname, '../build'),
		publicPath: `/build/`,
		filename: '[name].js',
		chunkFilename: 'route.[name].js',
		pathinfo: true,
	},
	entry: {
		router: './js/router',
		vendor: [
			'jquery', 'underscore', 'backbone', 'backbone.layoutmanager'
		],
		style: path.resolve(__dirname, '../css/main.scss')
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader?presets[]=es2015'
			},
			{
				test: /\.jst$/,
				loader: 'dot-loader'
			},
			{
				test: /\.scss$/,
				loader: extractSass.extract('css-loader?sourceMap!sass-loader?sourceMap')
			},
			{
				test: /\.css$/,
				loader: extractCss.extract('css-loader?sourceMap')
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg)(.*)?$/,
				loader: 'file-loader?name=[path][name].[hash:12].[ext]'
			}
		]
	},
	node: {
		fs: "empty"
	},
	plugins: [
		new webpack.IgnorePlugin(/^(winston|fs|config|config.default|config.production)$/),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: '../js/router',
			minChunks: 6,
			children: true,
		}),
		extractCss,
		extractSass
	]
};

module.exports = webpackConfig;