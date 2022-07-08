export type BaseResponse<T> = {
  data: T;
  error: string | null;
  isLoading: boolean;
};
