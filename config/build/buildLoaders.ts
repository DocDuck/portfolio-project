import { RuleSetRule } from 'webpack'
import { BuildOptions } from '.'
import { getCssLoader } from '../loaders/cssLoader';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  
  const cssLoader = getCssLoader(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  return [
    typescriptLoader,
    cssLoader,
    fileLoader,
    svgLoader
  ]
}