import path from 'path';
import webpack from 'webpack';
import { getConfig } from './config/builder';
import { IBuilderConfigOptions } from './config/builder/types/builder';

const options: IBuilderConfigOptions = {
  mode: 'development',
  paths: {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    template: path.resolve(__dirname, 'public', 'index.html')
  }
}

const config: webpack.Configuration = getConfig(options);

export default config;