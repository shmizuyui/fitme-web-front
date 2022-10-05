import { useState } from "react";
import { apiClient } from "../../apis/client";
import { Lesson } from "../../apis/models/lesson";
import { Pagination } from "../../apis/models/pagination";
import { FormParams } from "../../components/pages/user/lessons/LessonSearch";
import { handleErrorMessage } from "../../utils/errorMessage";
import { BaseResponse } from "../BaseResponse";
import { useApiBase } from "./useApiBase";

type LessonsResponse = {
  lessons: Lesson[];
} & Pagination;

export type Others = {
  fetchLessons: (
    pageIndex: number,
    formParams: FormParams,
    order: string
  ) => void;
  setFormParams: (params: FormParams) => void;
  formParams: FormParams;
  order: string;
  setOrder: (params: string) => void;
};
export const useLessons = () => {
  const { data, setData, error, setError, isLoading, setIsLoading } =
    useApiBase<LessonsResponse>();
  const [order, setOrder] = useState<string>("created_at_desc");
  const [formParams, setFormParams] = useState<FormParams | null>(null);
  const fetchLessons = async (
    pageIndex: number,
    formParams: FormParams,
    order: string
  ) => {
    const params = {
      page: pageIndex,
      categories: formParams?.categories || null,
      max_price: formParams?.maxPrice || null,
      min_price: formParams?.minPrice || null,
      genders: formParams?.genders || null,
      order: order,
    };
    console.log(params);
    setIsLoading(true);
    await apiClient
      .get("/api/v1/user/lessons", { params: params })
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
    fetchLessons,
    setFormParams,
    formParams,
    order,
    setOrder,
  } as BaseResponse<LessonsResponse> & Others;
};
