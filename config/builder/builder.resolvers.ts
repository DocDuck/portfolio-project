import webpack from 'webpack';

export const getResolvers  = (): webpack.ResolveOptions => ({
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  })