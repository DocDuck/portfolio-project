import path from 'path';
import { Configuration, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
	mode: "production",
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Frontend portfolio',
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		new ProgressPlugin(),
	],
};

export default config;