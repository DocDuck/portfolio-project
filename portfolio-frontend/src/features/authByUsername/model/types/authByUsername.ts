export interface IAuthByUsernameState {
  isLoading: boolean;
  username: string;
  password: string;
  error: string | undefined;
}