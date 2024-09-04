import {
  BuildOptions,
  buildLoaders,
  buildPlugins,
  buildResolvers,
  buildDevServer,
  Configuration
} from '.'

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
	const { mode, paths, isDev } = options;
	const { entry, ouptut } = paths;
  return {
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    entry,
    mode,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    performance: {
      hints: false,
      maxAssetSize: 512000,
      maxEntrypointSize: 512000,
    },
    output: {
      filename: '[name].[contenthash].js',
      path: ouptut,
      clean: true
    },
    plugins: buildPlugins(options),
  }
}