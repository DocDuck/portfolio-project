import type { Meta, StoryObj } from '@storybook/react';
import { About } from './About';

const meta = {
	title: 'pages/About',
	component: About,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {},
};
