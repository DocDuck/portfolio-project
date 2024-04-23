declare module "*.scss" {
  interface IClassNames {
    [index: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
// svg and file loaders
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.png"
declare module "*.svg" {
  import React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
// webpack define plugin variable envs
declare const IS_DEV: boolean;