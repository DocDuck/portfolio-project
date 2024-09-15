import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';

const meta = {
	title: 'shared/Typography',
	component: Typography,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {
		children: "Простой текст"
	},
};

export const H1Tag: Story = {
	args: {
		tag: 'h1',
		children: "Простой заголовок <h1>"
	},
};

export const ErrorInPTag: Story = {
	args: {
		tag: 'p',
		mode: 'error',
		children: "Текст с ошибкой в теге <p>"
	},
};