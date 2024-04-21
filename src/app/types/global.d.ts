declare module "*.scss" {
  interface IClassNames {
    [index: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
  
declare module "*.svg"