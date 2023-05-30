import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const getPlugins  = (): webpack.WebpackPluginInstance[] => [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.ProgressPlugin()
  ]