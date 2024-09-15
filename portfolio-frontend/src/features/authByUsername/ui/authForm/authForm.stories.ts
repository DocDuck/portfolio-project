import type { Meta, StoryObj } from '@storybook/react';
import { AuthForm } from './authForm';
import { StoreDecorator } from 'shared/ui/storybook/StoreDecorator';
import { RootState } from 'app/providers/store';

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
	decorators: StoreDecorator({
		authByUsername: {
			username: 'Test',
			password: 'Test'
		}
	} as RootState)
};

export const Error: Story = {
	args: {},
	decorators: StoreDecorator({
		authByUsername: {
			error: 'Test Error'
		}
	} as RootState)
};

export const Loading: Story = {
	args: {},
	decorators: StoreDecorator({
		authByUsername: {
			isLoading: true
		}
	} as RootState)
};