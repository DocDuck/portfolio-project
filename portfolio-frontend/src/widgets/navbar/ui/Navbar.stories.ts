import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/ui/storybook/StoreDecorator';
import { RootState } from 'app/providers/store';

const meta = {
	title: 'widget/Navbar',
	component: Navbar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {},
	decorators: StoreDecorator({
		user: {
			authData: undefined
		}
	} as RootState)
};

export const LoggedIn: Story = {
	args: {
		
	},
	decorators: StoreDecorator({
		user: {
			authData: {
				id: '1',
				username: 'Test user',
				password: 'Test password'
			}
		}
	} as RootState)
};