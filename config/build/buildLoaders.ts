import { RuleSetRule } from 'webpack'
import { loader as miniCssLoader } from 'mini-css-extract-plugin'
import { BuildOptions } from '.'

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
  }
  
  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        // Generate css only for production build
        isDev ? "style-loader" : miniCssLoader,
        // Translates CSS into CommonJS
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (path: string) => path.includes('.module.'),
              localIdentName: isDev ? '[path][local]--[hash:base64:5]' : '[hash:base64:8]'
            },
          }
        },
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }

  return [
    typescriptLoader,
    cssLoader
  ]
}