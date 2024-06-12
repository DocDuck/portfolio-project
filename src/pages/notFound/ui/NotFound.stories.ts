import type { Meta, StoryObj } from '@storybook/react';
import { NotFound } from './NotFound';

const meta = {
	title: 'pages/NotFound',
	component: NotFound,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {},
};
