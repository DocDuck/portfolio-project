import { RootState } from "app/providers/store";
import { counterReducer, counterActions } from "./counterSlice";

const VALUE = 10;
describe('Counter/counterSlice', () => {
	test('should return counter slice with incremented +1 value', () => {
		const store: RootState["counter"] = {
			value: VALUE
		};  
		expect(counterReducer(store, counterActions.increment())).toEqual({ value: VALUE + 1 });
	});
	test('should return counter slice with decremented -1 value', () => {
		const store: RootState["counter"] = {
			value: VALUE
		};  
		expect(counterReducer(store, counterActions.decrement())).toEqual({ value: VALUE - 1 });
	});
	test('should works with empty initial state', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
	});
});