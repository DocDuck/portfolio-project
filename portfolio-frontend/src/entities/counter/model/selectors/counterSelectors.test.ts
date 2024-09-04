import { RootState } from "app/providers/store";
import { getCounterValue } from "./counterSelectors";

const VALUE = 10;
describe('store/counter/getCounterValue', () => {
	test('should return counter value', () => {
		const store: RootState = {
			counter: {
				value: VALUE
			}
		};  
		expect(getCounterValue(store)).toBe(VALUE);
	});
});