import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LS_AUTH_USER_KEY } from "shared/constants/localStorage";
import { IUser } from "../types/user";
import { userActions } from "../slice/userSlice";

export const authByTokenThunk = createAsyncThunk<undefined, undefined, { rejectValue: string }>(
	'user/authByToken',
	async (_, thunkApi) => {
		try {
			const token = localStorage.getItem(LS_AUTH_USER_KEY);
			if (!token) {
				return;
			}
			const response = await axios.get<IUser>('http://localhost:8000/authByToken', { headers: { Authorization: `Bearer ${token}` } });
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			const authData = response.data;
			if (!authData.username) {
				throw Error('Invalid token');
			}
			thunkApi.dispatch(userActions.setAuthUser(authData));
		} catch (error) {
			return thunkApi.rejectWithValue('authByTokenThunk error:' + error);
		}
	});

export const logoutThunk = createAsyncThunk<undefined, undefined, { rejectValue: string }>(
	'user/logout',
	(_, thunkApi) => {
		localStorage.removeItem(LS_AUTH_USER_KEY);
		thunkApi.dispatch(userActions.clearAuthUser());
		return undefined;
	});