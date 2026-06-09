// Generic API Response Type
export interface ApiResponse<T> {
  data: T;
  statusCode: number;
  isSuccessResponse: boolean;
  message?: string;
}

export interface GlobalApiError {
  data: {
    message: string;
    error: string;
    statusCode: number;
  };
  status: number;
}
