import path from 'path';
import webpack from 'webpack';
import { getResolvers } from './config/webpack/webpack.resolvers';
import { getPlugins } from './config/webpack/webpack.plugins';
import { getLoaderRules } from './config/webpack/webpack.loaders';

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  plugins: getPlugins(),
  module: {
    rules: getLoaderRules()
  },
  resolve: getResolvers(),
};

export default config;