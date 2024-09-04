import type { Meta, StoryObj } from '@storybook/react';
import { EmptySvg } from './EmptySvg';

const meta = {
	title: 'shared/EmptySvg',
	component: EmptySvg,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof EmptySvg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {},
};
