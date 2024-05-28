import type { StorybookConfig } from "@storybook/react-webpack5";
import { getCssLoader } from "../loaders/cssLoader";
import path from "path";

const config: StorybookConfig = {
  stories: ["../../src/**/*.mdx", "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  docs: {
    autodocs: 'tag'
  },
  webpack(config) {
    if (!config?.resolve) return config;
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../../src"),
    ];
    config.module?.rules?.push(getCssLoader(true))

    return config;
  },
};
export default config;
