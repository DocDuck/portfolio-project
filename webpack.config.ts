import path from 'path'
import { BuildOptions, buildWebpackConfig, Configuration } from './config/build'

const mode = 'production' as BuildOptions['mode']; // TODO from .env
const isDev = mode === 'development';
const port = 3000

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

export default config