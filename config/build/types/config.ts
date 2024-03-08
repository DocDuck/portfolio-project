import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
export interface BuildPath {
    entry: string;
    ouptut: string;
    template: string;
}

export interface BuildOptions {
    mode: Configuration['mode'],
    isDev: boolean,
    paths: BuildPath,
    port: number
}

export interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}
