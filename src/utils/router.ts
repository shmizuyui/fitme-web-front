import Router from 'next/router';

export const handleRouter = (path: string) => () => Router.push(path);
