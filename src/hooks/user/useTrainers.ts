import { useState } from "react";
import { apiClient } from "../../apis/client";
import { Pagination } from "../../apis/models/pagination";
import { Trainer } from "../../apis/models/trainer";
import { FormParams } from "../../components/pages/user/trainers/TrainerSearch";
import { handleErrorMessage } from "../../utils/errorMessage";
import { BaseResponse } from "../BaseResponse";
import { useApiBase } from "./useApiBase";

type TrainersResponse = {
  trainers: Trainer[];
} & Pagination;
export type Others = {
  fetchTrainers: (
    pageIndex: number,
    formParams: FormParams,
    order: string
  ) => void;
  setFormParams: (params: FormParams) => void;
  formParams: FormParams;
  setOrder: (order: string) => void;
  order: string;
};
export const useTrainers = () => {
  const { data, setData, error, setError, isLoading, setIsLoading } =
    useApiBase<TrainersResponse>();
  const [order, setOrder] = useState<string>("created_at_desc");
  const [formParams, setFormParams] = useState<FormParams | null>(null);
  const fetchTrainers = async (
    pageIndex: number,
    formParams: FormParams,
    order: string
  ) => {
    const params = {
      page: pageIndex,
      genders: formParams?.genders || null,
      categories: formParams?.categories || null,
      min_history_year: formParams?.minHistoryYear || null,
      order: order,
    };
    setIsLoading(true);
    await apiClient
      .get("/api/v1/user/trainers", { params: params })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => setError(error));
    setIsLoading(false);
  };
  return {
    data: data?.data,
    error: handleErrorMessage(error, data?.error ?? ""),
    isLoading: isLoading || !data,
    fetchTrainers,
    formParams,
    setFormParams,
    order,
    setOrder,
  } as BaseResponse<TrainersResponse> & Others;
};
