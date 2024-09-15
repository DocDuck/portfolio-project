import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserState } from '../types/user';
// import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IUserState = {
	authData: undefined,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthUser: (state, { payload }: PayloadAction<IUser>) => {
			state.authData = payload;
		},
		clearAuthUser: (state) => {
			state.authData = undefined;
		}
	},
});

// Action creators are generated for each case reducer function
export const {
	actions: userActions,
	reducer: userReducer
} = userSlice;
