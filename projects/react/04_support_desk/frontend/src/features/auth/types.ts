export interface FetchUserError {
  message: string;
}

export interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
}

export type UserId = string;

export interface User {
  id: UserId;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface RegisterUserResponse {
  message: string;
  user: User;
  token: string;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  message: string;
  user: User;
  token: string;
}
