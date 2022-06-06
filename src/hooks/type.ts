export type BaseType<T> = {
  data: T;
  error: string | null;
  isLoading: boolean;
  isError: boolean;
};
