import type { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from './PageLoader';

const meta = {
	title: 'widget/PageLoader',
	component: PageLoader,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {},
};