import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './counter';
import { RootState } from 'app/providers/store';
import { testRender } from 'shared/lib/tests';

const preloadedState = {
	counter: {
		value: 10,
	},
} as RootState;
describe('Counter', () => {
	test('increment', () => {
		testRender(<Counter />, { preloadedState });
		const btn = screen.getByTestId('test-increment');
		const val = screen.getByTestId('test-counter');
		fireEvent.click(btn);
		expect(val).toHaveTextContent('11');
	});
	test('decrement', () => {
		testRender(<Counter />, { preloadedState });
		const btn = screen.getByTestId('test-decrement');
		const val = screen.getByTestId('test-counter');
		fireEvent.click(btn);
		expect(val).toHaveTextContent('9');
	});
});
