export const handleErrorMessage = (error: any, apiError: string) => {
  if (error) return '通信状況を確認してください';
  return apiError;
};
