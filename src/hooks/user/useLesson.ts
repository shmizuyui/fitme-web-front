import useSWR from "swr";
import { fetcher } from "../../apis/client";
import { Lesson } from "../../apis/models/lesson";
import { handleErrorMessage } from "../../utils/errorMessage";
import { BaseResponse } from "../BaseResponse";

type LessonResponse = {
  lesson: Lesson;
};

export const useLesson = (id: string) => {
  const { data, error } = useSWR(`/api/v1/user/lessons/${id}`, fetcher);
  return {
    data: data?.data,
    error: handleErrorMessage(error, data?.error),
    isLoading: !error && !data,
  } as BaseResponse<LessonResponse>;
};
