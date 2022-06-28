import useSWR from "swr";
import { fetcher } from "../../apis/client";
import { Trainer } from "../../apis/models/trainer";
import { BaseType } from "../type";

type TrainerResponse = {
  trainer: Trainer;
};

export const useTrainer = (id: string) => {
  const { data, error } = useSWR(`/api/v1/user/trainers/${id}`, fetcher);
  return {
    data: data?.data,
    error: data?.error,
    isLoading: !error && !data,
    isError: error,
  } as BaseType<TrainerResponse>;
};
