import { Configuration } from "webpack"
import { BuildOptions, buildLoaders, buildPlugins, buildResolvers } from '.'

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
	const { mode, paths } = options;
	const { entry, ouptut } = paths;
  return {
    mode,
    entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].js',
      path: ouptut,
      clean: true
    },
    plugins: buildPlugins(options),
  }
}