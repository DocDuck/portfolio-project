import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser, userActions } from "entities/user";
import { LS_AUTH_USER_KEY } from "shared/constants/localStorage";

interface IAuthByUsernameThunkProps {
  username: string;
	password: string;
}
export const authByUsernameThunk = createAsyncThunk<undefined, IAuthByUsernameThunkProps, { rejectValue: string }>(
	'auth/authByUsername',
	async (props, thunkApi) => {
		try {
			const response = await axios.post<string>('http://localhost:8000/auth', props);
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			const authData = jwtDecode<IUser>(response.data);
			if (!authData.username) {
				throw Error('Invalid token');
			}
			localStorage.setItem(LS_AUTH_USER_KEY, response.data);
			thunkApi.dispatch(userActions.setAuthUser(authData));
			return undefined;
		} catch (error) {
			return thunkApi.rejectWithValue('authByUsernameThunk error:' + error);
		}
	});