import type { Preview } from "@storybook/react";
import { RouterDecorator, StyleDecorator, ThemeDecorator } from "shared/ui/storybook";

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
  ]
};

export default preview;
