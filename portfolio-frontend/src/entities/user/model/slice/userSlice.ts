import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../types/user';
// import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IUserState = {
	authData: undefined,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
    
	},
});

// Action creators are generated for each case reducer function
export const {
	actions: userActions,
	reducer: userReducer
} = userSlice;
