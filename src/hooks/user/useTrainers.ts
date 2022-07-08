import useSWR from "swr";
import { fetcher } from "../../apis/client";
import { Pagination } from "../../apis/models/pagination";
import { Trainer } from "../../apis/models/trainer";
import { handleErrorMessage } from "../../utils/errorMessage";
import { BaseResponse } from "../BaseResponse";

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
    error: handleErrorMessage(error, data?.error),
    isLoading: !error && !data,
  } as BaseResponse<TrainerResponse>;
};
