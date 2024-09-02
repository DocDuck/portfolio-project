import { fireEvent, screen } from "@testing-library/react";
import { Counter } from "./counter";
import { RootState } from "app/providers/store";
import { renderForTests } from "shared/lib/tests";

const preloadedState: RootState = {
	counter: {
		value: 10
	}
};
describe('Counter', () => {
	test('increment', () => {
		renderForTests(<Counter />, { preloadedState });
		const btn = screen.getByTestId("test-increment");
		const val = screen.getByTestId("test-counter");
		fireEvent.click(btn);
		expect(val).toHaveTextContent('11');
	});
	test('decrement', () => {
		renderForTests(<Counter />, { preloadedState });
		const btn = screen.getByTestId("test-decrement");
		const val = screen.getByTestId("test-counter");
		fireEvent.click(btn);
		expect(val).toHaveTextContent('9');
	});
});