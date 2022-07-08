import {useState} from 'react';

type BaseResponse<T> = {
  data: T;
  error: string | null;
  status: number;
};

export const useApiBase = <T>() => {
  const [data, setData] = useState<BaseResponse<T> | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return {
    data,
    setData,
    error,
    setError,
    isLoading,
    setIsLoading,
  };
};
