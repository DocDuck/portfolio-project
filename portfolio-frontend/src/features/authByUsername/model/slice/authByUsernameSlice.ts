import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IAuthByUsernameState } from '../types/authByUsername';
import { authByUsernameThunk } from '../thunks/authByUsernameThunks';

const initialState: IAuthByUsernameState = {
	isLoading: false,
	password: '',
	username: '',
	error: undefined
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
	extraReducers: (builder) => {
		builder
			.addCase(authByUsernameThunk.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
				state.username = '';
			})
			.addCase(authByUsernameThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.username = action.payload.username;
			})
			.addCase(authByUsernameThunk.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

// Action creators are generated for each case reducer function
export const {
	actions: authByUsernameActions,
	reducer: authByUsernameReducer
} = authByUsernameSlice;
