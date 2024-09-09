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
		placeholder: { control: 'text' },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

export const WithPlaceholder: Story = {
	args: {
		placeholder: 'placeholder'
	},
};