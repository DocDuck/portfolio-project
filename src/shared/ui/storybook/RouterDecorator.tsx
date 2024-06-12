import { BrowserRouter as Router } from 'react-router-dom';
import { Decorator } from "@storybook/react";

export const RouterDecorator: Decorator = (Story) => (
	<Router>
		<Story />
	</Router>
);