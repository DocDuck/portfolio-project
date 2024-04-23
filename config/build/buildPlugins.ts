import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

export const buildPlugins = ({ paths: { template }, isDev }: BuildOptions): WebpackPluginInstance[] => [
    new HtmlWebpackPlugin({
        title: 'Frontend portfolio',
        template
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new DefinePlugin({
        IS_DEV: isDev
    })
]