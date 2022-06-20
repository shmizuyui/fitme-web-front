import useSWR from 'swr';
import {fetcher} from '../../apis/client';
import {Lesson} from '../../apis/models/lesson';
import {Pagination} from '../../apis/models/pagination';
import {BaseType} from '../type';

type LessonsResponse = {
  lessons: Lesson[];
} & Pagination;

export const useLessons = (pageIndex: number) => {
  const {data, error} = useSWR(
      `/api/v1/user/lessons?page=${pageIndex}`,
      fetcher,
  );
  return {
    data: data?.data,
    error: data?.error,
    isLoading: !error && !data,
    isError: error,
  } as BaseType<LessonsResponse>;
};
