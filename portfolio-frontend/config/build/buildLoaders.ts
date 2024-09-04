import { RuleSetRule } from 'webpack'
import { BuildOptions } from '.'
import { getCssLoader } from '../loaders/cssLoader';
import { getSvgLoader } from '../loaders/svgLoader';
import { getFileLoader } from '../loaders/fileLoader';
import { getTypescriptLoader } from '../loaders/typescriptLoader';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const typescriptLoader = getTypescriptLoader();
  const cssLoader = getCssLoader(isDev);
  const fileLoader = getFileLoader();
  const svgLoader = getSvgLoader();

  return [
    typescriptLoader,
    cssLoader,
    fileLoader,
    svgLoader
  ]
}