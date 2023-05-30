export type TBuilderMode = 'development' | 'production';

export interface IBuilderPaths {
    entry: string;
    output: string;
    template: string;
}

export interface IBuilderConfigOptions {
    mode: TBuilderMode;
    paths: IBuilderPaths;
}