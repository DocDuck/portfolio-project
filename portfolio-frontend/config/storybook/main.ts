import path from "path";
import { DefinePlugin, RuleSetRule } from "webpack";
import type { StorybookConfig } from "@storybook/react-webpack5";
import { getCssLoader } from "../loaders/cssLoader";
import { getSvgLoader } from "../loaders/svgLoader";

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
	docs: {},
	webpackFinal: (config) => {
		if (!config?.resolve) return config;
		config.resolve.modules = [
			...(config.resolve.modules ?? []),
			path.resolve(__dirname, "../../src"),
		];
		if (config.resolve.alias) {
			config.resolve.alias = {
				...config.resolve.alias,
				"app": path.resolve(__dirname, "../../src/app"),
				"entities": path.resolve(__dirname, "../../src/entities"),
				"features": path.resolve(__dirname, "../../src/features"),
				"pages": path.resolve(__dirname, "../../src/pages"),
				"shared": path.resolve(__dirname, "../../src/shared"),
				"widgets": path.resolve(__dirname, "../../src/widgets"),
			};
		}
		config.plugins!.push(new DefinePlugin({
			IS_DEV: JSON.stringify(true),
		}));
		const rules = config?.module?.rules ?? [];
		const pathToInlineSvg = path.resolve(__dirname, '../../src/shared/assets/icons');
		// modify storybook's file-loader rule to avoid conflicts with svgr
		const fileLoaderRule = rules.find((rule: RuleSetRule) => (rule.test as RegExp).test('.svg'));
		(fileLoaderRule as RuleSetRule).exclude = pathToInlineSvg;
		rules.push({
			...getSvgLoader(),
			include: pathToInlineSvg,
		});
		rules.push(getCssLoader(true));
		return config;
	},
	typescript: {
		reactDocgen: "react-docgen-typescript"
	}
};
export default config;
