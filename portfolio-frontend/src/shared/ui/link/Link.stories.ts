import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta = {
	title: 'shared/Link',
	component: Link,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		to: { control: 'text' },
	},
	args: { to: '/' },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {
		children: 'Link'
	},
};
