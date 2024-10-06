import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { IUser, userActions } from "entities/user";
import { AppDispatch, RootState } from "app/providers/store";
import { authByUsernameThunk } from "./authByUsernameThunks";

// мокаем аксиос и говорим тайпскрипту что аксиос теперь мокнутый
jest.mock('axios');
const axiosMock = jest.mocked(axios);
// мокаем jwtDecode и говорим тайпскрипту что jwtDecode теперь мокнутый
jest.mock('jwt-decode');
const jwtDecodeMock = jest.mocked(jwtDecode);

const TOKEN = 'token';
const USER_DATA: IUser = {
	id: 'id',
	username: 'username',
	password: 'password',
};

describe('AuthByUsername/authByUsernameThunk', () => {
	let dispatch: AppDispatch;
	let getState: () => RootState;
	beforeEach(() => {
		dispatch = jest.fn();
		getState = jest.fn();
	});
	test('success', async() => {
		// Подменяем значение post метода в аксиосе, который отдает jwt
		axiosMock.post.mockReturnValue(Promise.resolve({ data: TOKEN }));
		// Подменяем функции которая декодирует jwt и отдает IUser
		jwtDecodeMock.mockReturnValue(USER_DATA);
		const action = authByUsernameThunk({
			username: USER_DATA.username,
			password: USER_DATA.password,
		});
		const result = await action(dispatch, getState, undefined);
		// Проверяем, что диспатч в стор вызвался с нужным объектом экшана
		expect(dispatch).toHaveBeenCalledWith(userActions.setAuthUser(USER_DATA));
		// Проверяем, что диспатч вызвался 3 раза (authByUsernameThunk.pending, thunkApi.dispatch(userActions.setAuthUser(authData)), authByUsernameThunk.fulfilled) при успешном запросе
		expect(dispatch).toHaveBeenCalledTimes(3);
		// Проверяем, что у аксиоса дернулся метод пост
		// eslint-disable-next-line @typescript-eslint/unbound-method
		expect(axiosMock.post).toHaveBeenCalled();
		// Проверяем что промис зарезолвился в fulfilled
		expect(result.meta.requestStatus).toBe('fulfilled');
	});
	test('wrong token', async() => {
		// Подменяем значение post метода в аксиосе, который отдает jwt
		axiosMock.post.mockReturnValue(Promise.resolve({ data: TOKEN }));
		// Подменяем функции которая декодирует jwt и отдает ашыпку
		jwtDecodeMock.mockReturnValue(undefined);
		const action = authByUsernameThunk({
			username: USER_DATA.username,
			password: USER_DATA.password,
		});
		const result = await action(dispatch, getState, undefined);
		// Проверяем, что диспатч вызвался 2 раза (authByUsernameThunk.pending, authByUsernameThunk.rejected) при плохом токене
		expect(dispatch).toHaveBeenCalledTimes(2);
		// Проверяем, что у аксиоса дернулся метод пост
		// eslint-disable-next-line @typescript-eslint/unbound-method
		expect(axiosMock.post).toHaveBeenCalled();
		// Проверяем что промис упал в rejected
		expect(result.meta.requestStatus).toBe('rejected');
	});
	test('token not exist', async() => {
		// Подменяем значение post метода в аксиосе, который отдает jwt на ошибку Invalid token
		axiosMock.post.mockReturnValue(Promise.resolve({ status: 403 }));
		// Подменяем функции которая декодирует jwt и отдает ашыпку
		jwtDecodeMock.mockReturnValue(undefined);
		const action = authByUsernameThunk({
			username: USER_DATA.username,
			password: USER_DATA.password,
		});
		const result = await action(dispatch, getState, undefined);
		// Проверяем, что диспатч вызвался 2 раза (authByUsernameThunk.pending, authByUsernameThunk.rejected) при плохом токене
		expect(dispatch).toHaveBeenCalledTimes(2);
		// Проверяем, что у аксиоса дернулся метод пост
		// eslint-disable-next-line @typescript-eslint/unbound-method
		expect(axiosMock.post).toHaveBeenCalled();
		// Проверяем что промис упал в rejected
		expect(result.meta.requestStatus).toBe('rejected');
	});
});