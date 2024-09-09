import type { Meta, StoryObj } from '@storybook/react';
import { Home } from './Home';
import { StoreDecorator } from 'shared/ui/storybook/StoreDecorator';
import { RootState } from 'app/providers/store';

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
	decorators: StoreDecorator({
		counter: {
			value: 666
		}
	} as RootState)
};