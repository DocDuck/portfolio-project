import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const getResolvers  = (): webpack.ResolveOptions => ({
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  })