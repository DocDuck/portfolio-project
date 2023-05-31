import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IBuilderPaths } from './types/builder';

export const getPlugins  = (template: IBuilderPaths['template']): webpack.WebpackPluginInstance[] => [
    new HtmlWebpackPlugin({
      template
    }),
    new webpack.ProgressPlugin()
  ]