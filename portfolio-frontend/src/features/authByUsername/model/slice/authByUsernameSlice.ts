import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IAuthByUsernameState } from '../types/authByUsername';

const initialState: IAuthByUsernameState = {
	isLoading: false,
	password: '',
	username: ''
};

export const authByUsernameSlice = createSlice({
	name: 'authByUsername',
	initialState,
	reducers: {
		setUsername: (state, { payload }: PayloadAction<IAuthByUsernameState['username']>) => {
			state.username = payload;
		},
		setPassword: (state, { payload }: PayloadAction<IAuthByUsernameState['password']>) => {
			state.password = payload;
		},
		setIsLoading: (state, { payload }: PayloadAction<IAuthByUsernameState['isLoading']>) => {
			state.isLoading = payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	actions: authByUsernameActions,
	reducer: authByUsernameReducer
} = authByUsernameSlice;
