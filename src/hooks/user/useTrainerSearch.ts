import useSWR from "swr";
import { fetcher } from "../../apis/client";
import { Lesson } from "../../apis/models/lesson";
import { Trainer } from "../../apis/models/trainer";
import { handleErrorMessage } from "../../utils/errorMessage";
import { BaseResponse } from "../BaseResponse";

type TrainerSearchResponse = {
  genders: Trainer["gender"][];
  categories: Lesson["category"][];
};

export const useTrainerSearch = () => {
  const { data, error } = useSWR("/api/v1/user/trainer/searches", fetcher);

  return {
    data: data?.data,
    error: handleErrorMessage(error, data?.error),
    isLoading: !error && !data,
  } as BaseResponse<TrainerSearchResponse>;
};
