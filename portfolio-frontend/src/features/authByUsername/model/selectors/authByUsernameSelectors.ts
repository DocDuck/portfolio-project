import { RootState } from "app/providers/store";

export const getAuthByUsernameData = (state: RootState) => state.authByUsername;
export const getAuthUsername = (state: RootState) => state.authByUsername.username;
export const getAuthPassword= (state: RootState) => state.authByUsername.password;
export const getAuthIsLoading= (state: RootState) => state.authByUsername.isLoading;
export const getAuthError= (state: RootState) => state.authByUsername.error;