import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'full',
	},
	tags: ['autodocs'],
	argTypes: {
		mode: { control: 'text' },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clean: Story = {
	args: {
		mode: 'clean',
		children: 'CLEAN BTN'
	},
};

export const Border: Story = {
	args: {
		mode: 'border',
		children: 'BORDER BTN'
	},
};

export const Filled: Story = {
	args: {
		mode: 'filled',
		children: 'FILLED BTN'
	},
};
