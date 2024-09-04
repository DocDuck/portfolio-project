import { Decorator } from '@storybook/react';
import { RootState, StoreProvider } from 'app/providers/store';

export const StoreDecorator: (state: RootState) => Decorator = (state) => (Story) => (
	<StoreProvider preloadedState={state}>
		<Story />
	</StoreProvider>
);