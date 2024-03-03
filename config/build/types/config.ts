import { Configuration } from 'webpack'

export interface BuildPath {
    entry: string;
    ouptut: string;
    template: string;
}

export interface BuildOptions {
    mode: Configuration['mode'],
    isDev: boolean,
    paths: BuildPath,
}
