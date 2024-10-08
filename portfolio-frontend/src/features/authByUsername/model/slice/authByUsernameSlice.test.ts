import { authByUsernameActions, authByUsernameReducer } from "./authByUsernameSlice";

const INITIAL_STATE = {
	isLoading: false,
	username: '',
	password: '',
	error: ''
};

describe('AuthByUsername/slice', () => {
	test('should set username', () => {
		expect(authByUsernameReducer(INITIAL_STATE, authByUsernameActions.setUsername('username'))).toEqual({
			...INITIAL_STATE,
			username: 'username'
		});
	});
	test('should set password', () => {
		expect(authByUsernameReducer(INITIAL_STATE, authByUsernameActions.setPassword('password'))).toEqual({
			...INITIAL_STATE,
			password: 'password'
		});
	});
});