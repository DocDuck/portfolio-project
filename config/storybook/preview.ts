import type { Preview } from "@storybook/react";
import { RouterDecorator, StyleDecorator, ThemeDecorator } from "shared/ui/storybook";
import { themeGlobalTypes } from "shared/ui/storybook/ThemeDecorator";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

	decorators: [
		ThemeDecorator,
		StyleDecorator,
		RouterDecorator
	],

	tags: ["autodocs"],
	globalTypes: themeGlobalTypes
};

export default preview;
