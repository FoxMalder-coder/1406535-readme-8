export const AuthenticationMessage = {
  LoggedSuccess: 'User has been successfully logged',
  LoggedError: 'Password/login is wrong',
} as const;

export const UserServiceMessage = {
  UserFound: 'User found',
  UserNotFound: 'User not found',
  UserExist: 'User with such email already exists',
  UserCreated: 'The new user has been successfully created',
} as const;
