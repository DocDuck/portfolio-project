import path from 'path'
import { BuildEnv, BuildOptions, buildWebpackConfig, Configuration } from './config/build'

export default (env: BuildEnv) => {
	const mode = env.mode || 'development'
	const port = env.port || 3000
	const isDev = mode === 'development';

	const options: BuildOptions = {
		mode,
		isDev,
		paths: {
			entry: path.resolve(__dirname, 'src', 'index.ts'),
			ouptut: path.resolve(__dirname, 'build'),
			template: path.resolve(__dirname, 'public', 'index.html')
		},
		port,
	}
	const config: Configuration = buildWebpackConfig(options)

	return config
}