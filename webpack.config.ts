import path from 'path'
import { Configuration } from 'webpack'
import { BuildOptions, buildWebpackConfig } from './config/build'

const mode = 'development' as BuildOptions['mode']; // TODO from .env
const isDev = mode === 'development';

const options: BuildOptions = {
	mode,
	isDev,
	paths: {
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		ouptut: path.resolve(__dirname, 'build'),
		template: path.resolve(__dirname, 'public', 'index.html')
	}
}

const config: Configuration = buildWebpackConfig(options)

export default config