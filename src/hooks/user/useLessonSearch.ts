import useSWR from 'swr';
import {fetcher} from '../../apis/client';
import {Lesson} from '../../apis/models/lesson';
import {Trainer} from '../../apis/models/trainer';
import {handleErrorMessage} from '../../utils/errorMessage';
import {BaseResponse} from '../BaseResponse';

type LessonSearchResponse = {
  categories: Lesson['category'][];
  genders: Trainer['gender'][];
};
export const useLessonSearch = () => {
  const {data, error} = useSWR('/api/v1/user/lesson/searches', fetcher);

  return {
    data: data?.data,
    error: handleErrorMessage(error, data?.error),
    isLoading: !error && !data,
  } as BaseResponse<LessonSearchResponse>;
};
