import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { rootReducer } from '../../../../app/providers/store';
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
		clear: (state) => {
			state.username = '';
			state.password = '';
			state.error = undefined;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(authByUsernameThunk.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
				state.username = '';
				state.password = '';
			})
			.addCase(authByUsernameThunk.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(authByUsernameThunk.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

declare module '../../../../app/providers/store' {
  // WithSlice utility assumes reducer is under slice.reducerPath
  export type LazyLoadedSlices = WithSlice<typeof authByUsernameSlice>
}

const injectedAuthByUsernameSlice = authByUsernameSlice.injectInto(rootReducer);

export const {
	actions: authByUsernameActions,
	reducer: authByUsernameReducer
} = injectedAuthByUsernameSlice;