import useSWR from "swr";
import { fetcher } from "../../apis/client";
import { Lesson } from "../../apis/models/lesson";
import { LessonSearch } from "../../apis/models/lessonSearch";
import { Trainer } from "../../apis/models/trainer";
import { BaseResponse } from "../baseResponse";

type LessonSearchResponse = {
  categories: Lesson["category"][];
  genders: Trainer["gender"][];
};
export const useLessonSearch = () => {
  const { data, error } = useSWR("/api/v1/user/lesson/searches", fetcher);

  return {
    data: data?.data,
    error: error || data?.error,
    isLoading: !error && !data,
  } as BaseResponse<LessonSearchResponse>;
};
