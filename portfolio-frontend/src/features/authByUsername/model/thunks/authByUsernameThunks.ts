import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "entities/user";

interface IAuthByUsernameThunkProps {
  username: string;
  password: string;
}
export const authByUsernameThunk = createAsyncThunk<IUser, IAuthByUsernameThunkProps, { rejectValue: string }>(
	'auth/authByUsername',
	async (authData, thunkApi) => {
		try {
			const response = await axios.post('http://localhost:8000/auth', authData);
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue('authByUsernameThunk error:' + error);
		}
	});