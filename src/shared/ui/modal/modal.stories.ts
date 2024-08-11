import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';

const meta = {
	title: 'shared/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {
		children: "Lorem ipsum"
	},
};
