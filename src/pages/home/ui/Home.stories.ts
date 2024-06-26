import type { Meta, StoryObj } from '@storybook/react';
import { Home } from './Home';

const meta = {
	title: 'pages/Home',
	component: Home,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {},
};