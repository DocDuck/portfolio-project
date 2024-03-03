import { WebpackPluginInstance, ProgressPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/config'

export const buildPlugins = ({ paths: { template } }: BuildOptions): WebpackPluginInstance[] => [
    new HtmlWebpackPlugin({
        title: 'Frontend portfolio',
        template
    }),
    new ProgressPlugin(),
]