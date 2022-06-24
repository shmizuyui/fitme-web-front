import useSWR from "swr";
import { fetcher } from "../../apis/client";
import { Pagination } from "../../apis/models/pagination";
import { Trainer } from "../../apis/models/trainer";
import { BaseType } from "../type";

type TrainerResponse = {
  trainers: Trainer[];
} & Pagination;

export const useTrainers = (pageIndex: number) => {
  const { data, error } = useSWR(
    `/api/v1/user/trainers?page=${pageIndex}`,
    fetcher
  );
  return {
    data: data?.data,
    error: data?.error,
    isLoading: !error && !data,
    isError: error,
  } as BaseType<TrainerResponse>;
};
