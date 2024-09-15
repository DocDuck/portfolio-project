import type { Meta, StoryObj } from '@storybook/react';
import { AuthForm } from './authForm';

const meta = {
	title: 'feature/AuthForm',
	component: AuthForm,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
    
	},
} satisfies Meta<typeof AuthForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {},
};

export const Loading: Story = {
	args: {
		
	},
};