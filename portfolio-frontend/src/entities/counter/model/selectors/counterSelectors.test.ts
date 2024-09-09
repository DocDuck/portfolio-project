import { RootState } from "app/providers/store";
import { getCounterValue } from "./counterSelectors";

const VALUE = 10;
describe('store/counter/getCounterValue', () => {
	test('should return counter value', () => {
		const store = {
			counter: {
				value: VALUE
			}
		} as RootState;  
		expect(getCounterValue(store)).toBe(VALUE);
	});
});