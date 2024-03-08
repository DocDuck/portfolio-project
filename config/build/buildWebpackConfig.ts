import {
  BuildOptions,
  buildLoaders,
  buildPlugins,
  buildResolvers,
  buildDevServer,
  Configuration
} from '.'

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
	const { mode, paths, port } = options;
	const { entry, ouptut } = paths;
  return {
    devtool: 'inline-source-map',
    devServer: buildDevServer(options),
    entry,
    mode,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
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