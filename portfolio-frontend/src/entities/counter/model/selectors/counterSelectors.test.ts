import { RootState } from "app/providers/store";
import { getCounterValue } from "./counterSelectors";

const VALUE = 10;
describe('Counter/getCounterValue', () => {
	test('should return counter value', () => {
		const store = {
			counter: {
				value: VALUE
			}
		} as RootState;  
		expect(getCounterValue(store)).toBe(VALUE);
	});
	test('should return undefined when data is empty', () => {
		const store = {} as RootState;  
		expect(getCounterValue(store)).toBe(undefined);
	});
});