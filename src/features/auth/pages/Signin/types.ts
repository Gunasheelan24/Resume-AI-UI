export interface SignUser {
  email: string;
  password: string;
}

export interface ApiError {
  message: string;
  error: string;
  statusCode: number;
}
