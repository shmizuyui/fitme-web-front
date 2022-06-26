import useSWR from "swr";
import { fetcher } from "../../apis/client";
import { Trainer } from "../../apis/models/trainer";
import { BaseResponse } from "../baseResponse";

type TrainerResponse = {
  trainer: Trainer;
};

export const useTrainer = (id: string) => {
  const { data, error } = useSWR(`/api/v1/user/trainers/${id}`, fetcher);
  return {
    data: data?.data,
    error: error || data?.error,
    isLoading: !error && !data,
  } as BaseResponse<TrainerResponse>;
};
