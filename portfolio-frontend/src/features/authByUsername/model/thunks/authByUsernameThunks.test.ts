import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { IUser, userActions } from "entities/user";
import { authByUsernameThunk } from "./authByUsernameThunks";
import { TestThunk } from "shared/lib/tests";

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

	test('success', async() => {
		// Подменяем значение post метода в аксиосе, который отдает jwt
		axiosMock.post.mockReturnValue(Promise.resolve({ data: TOKEN }));
		// Подменяем функции которая декодирует jwt и отдает IUser
		jwtDecodeMock.mockReturnValue(USER_DATA);
		const thunk = new TestThunk(authByUsernameThunk);
		const result = await thunk.exec({
			username: USER_DATA.username,
			password: USER_DATA.password,
		});
		// Проверяем, что диспатч в стор вызвался с нужным объектом экшана
		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(USER_DATA));
		// Проверяем, что диспатч вызвался 3 раза (authByUsernameThunk.pending, thunkApi.dispatch(userActions.setAuthUser(authData)), authByUsernameThunk.fulfilled) при успешном запросе
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
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
		const thunk = new TestThunk(authByUsernameThunk);
		const result = await thunk.exec({
			username: USER_DATA.username,
			password: USER_DATA.password,
		});
		// Проверяем, что диспатч вызвался 2 раза (authByUsernameThunk.pending, authByUsernameThunk.rejected) при плохом токене
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
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
		const thunk = new TestThunk(authByUsernameThunk);
		const result = await thunk.exec({
			username: USER_DATA.username,
			password: USER_DATA.password,
		});
		// Проверяем, что диспатч вызвался 2 раза (authByUsernameThunk.pending, authByUsernameThunk.rejected) при плохом токене
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		// Проверяем, что у аксиоса дернулся метод пост
		// eslint-disable-next-line @typescript-eslint/unbound-method
		expect(axiosMock.post).toHaveBeenCalled();
		// Проверяем что промис упал в rejected
		expect(result.meta.requestStatus).toBe('rejected');
	});
});