export const fetcher = (path: string): Promise<any> =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`).then((r) => r.json());
