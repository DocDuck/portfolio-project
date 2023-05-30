import path from 'path';
import webpack from 'webpack';
import { getResolvers } from './builder.resolvers';
import { getPlugins } from './builder.plugins';
import { getLoaderRules } from './builder.loaders';
import { IBuilderConfigOptions } from './types/builder';

export const getConfig = (options: IBuilderConfigOptions): webpack.Configuration => {
    const { mode, paths } = options;
    const { entry, output, template } = paths;
    return {
      mode,
      entry,
      output: {
        filename: '[name].[contenthash].js',
        path: output,
        clean: true
      },
      plugins: getPlugins(template),
      module: {
        rules: getLoaderRules()
      },
      resolve: getResolvers(),
    }
  };