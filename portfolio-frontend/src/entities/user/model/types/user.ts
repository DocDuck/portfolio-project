export interface IUser {
  id: string;
  username: string;
  password: string;
}

export interface IUserState {
  authData?: IUser;
}
