// Generic API Response Type
export interface ApiResponse<T> {
  data: T;
  statusCode: number;
  isSuccessResponse: boolean;
  message?: string;
}
