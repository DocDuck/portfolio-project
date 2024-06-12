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
    ThemeDecorator, // TODO этот декоратор работает не стабильно со сторибуком и совсем не дружит с локи. Пришлось руками править сорсы где падает на проверке массива с классНеймами тем
    StyleDecorator,
    RouterDecorator
  ],

  tags: ["autodocs"]
};

export default preview;
