import { rootReducer } from "app/providers/store";
import { authByUsernameSlice } from "../slice/authByUsernameSlice";

const withAuthByUsernameSlice = rootReducer.inject(authByUsernameSlice);

export const getAuthByUsernameData = withAuthByUsernameSlice.selector(state => state.authByUsername);
export const getAuthUsername = withAuthByUsernameSlice.selector((state) => state.authByUsername.username);
export const getAuthPassword= withAuthByUsernameSlice.selector((state) => state.authByUsername.password);
export const getAuthIsLoading= withAuthByUsernameSlice.selector((state) => state.authByUsername.isLoading);
export const getAuthError = withAuthByUsernameSlice.selector((state) => state.authByUsername.error);
