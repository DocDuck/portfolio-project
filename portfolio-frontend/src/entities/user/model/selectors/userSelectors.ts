import { RootState } from "app/providers/store";

export const getAuthUser = (state: RootState) => state.user.authData; 