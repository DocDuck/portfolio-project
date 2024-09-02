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
		children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id egestas odio. Fusce malesuada, odio at egestas iaculis, odio arcu volutpat sem, a lobortis ante dolor sed mi. Pellentesque quis arcu et tortor varius tincidunt. Pellentesque quis purus vel orci laoreet luctus. Pellentesque vestibulum viverra ligula sed imperdiet. Ut quis ullamcorper elit. Vestibulum rutrum aliquet orci eu placerat. Duis elementum eu dui ac porta. In fringilla, ex non tempus finibus, eros eros tempus tellus, quis facilisis ligula arcu ac lectus. Curabitur vel turpis id quam sollicitudin placerat ac at velit.",
		isOpen: true,
	},
};
