import useSWR from "swr";
import { fetcher } from "../../apis/client";
import { Lesson } from "../../apis/models/lesson";
import { BaseType } from "../type";

export const useLessons = () => {
  const { data, error } = useSWR(`/api/v1/user/lessons`, fetcher);
  return {
    data: data?.data?.lessons,
    error: data?.error,
    isLoading: !error && !data,
    isError: error,
  } as BaseType<Lesson[]>;
};
