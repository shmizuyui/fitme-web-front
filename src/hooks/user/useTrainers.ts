import useSWR from "swr";
import { fetcher } from "../../apis/client";
import { Pagination } from "../../apis/models/pagination";
import { Trainer } from "../../apis/models/trainer";
import { BaseResponse } from "../baseResponse";

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
    error: error || data?.error,
    isLoading: !error && !data,
  } as BaseResponse<TrainerResponse>;
};
