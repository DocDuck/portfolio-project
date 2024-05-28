import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react";
import { Theme } from "shared/theme";
import { StyleDecorator, ThemeDecorator } from "shared/ui/storybook";

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
  ]
};

export default preview;
