import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './Input';

const meta = {
	title: 'shared/Input',
	component: Input,
	parameters: {
		layout: 'full',
	},
	tags: ['autodocs'],
	argTypes: {
		mode: { control: 'text' },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CleanS: Story = {
	args: {
		size: 's',
		mode: 'clean',
		children: 'CLEAN BTN'
	},
};

export const CleanM: Story = {
	args: {
		mode: 'clean',
		children: 'CLEAN BTN'
	},
};

export const CleanL: Story = {
	args: {
		size: 'l',
		mode: 'clean',
		children: 'CLEAN BTN'
	},
};

export const BorderS: Story = {
	args: {
		size: 's',
		mode: 'border',
		children: 'BORDER BTN'
	},
};

export const BorderM: Story = {
	args: {
		mode: 'border',
		children: 'BORDER BTN'
	},
};

export const BorderL: Story = {
	args: {
		size: 'l',
		mode: 'border',
		children: 'BORDER BTN'
	},
};

export const FilledS: Story = {
	args: {
		size: 's',
		mode: 'filled',
		children: 'FILLED BTN'
	},
};

export const FilledM: Story = {
	args: {
		mode: 'filled',
		children: 'FILLED BTN'
	},
};

export const FilledL: Story = {
	args: {
		size: 'l',
		mode: 'filled',
		children: 'FILLED BTN'
	},
};
