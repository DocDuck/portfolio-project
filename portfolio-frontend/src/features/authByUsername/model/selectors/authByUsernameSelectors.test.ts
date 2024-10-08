import { RootState } from "app/providers/store";
import { getAuthByUsernameData } from "./authByUsernameSelectors";
import { initialState } from "../slice/authByUsernameSlice";

const AUTH_DATA = {
	isLoading: false,
	username: 'username',
	password: 'password',
	error: 'error'
};

describe('AuthByUsername/getAuthByUsernameData', () => {
	test('should return user data', () => {
		const store = {
			user: {},
			authByUsername: {
				...AUTH_DATA
			}
		} as unknown as RootState;  
		expect(getAuthByUsernameData(store)).toEqual(AUTH_DATA);
	});
	test('should return injected initial state when root store is empty', () => {
		const store = {} as unknown as RootState;  
		expect(getAuthByUsernameData(store)).toEqual(initialState);
	});
});