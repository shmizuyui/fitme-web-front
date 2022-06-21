import {useRouter} from 'next/router';
import {useLesson} from '../../../hooks/user/useLesson';
import {categoryBy} from '../../../utils/categoryBy';

const LessonDetail = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, error, isLoading, isError} = useLesson(String(id));

  if (isError) return <p>{error}</p>;

  return (
    <div className="h-screen w-2/3 mx-auto">
      <div className="pt-32">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="flex">
              <div className="mr-2">
                <img src="/sample.jpg" alt="" />
                <p className="text-center text-xl mt-1">トレーナーの名前</p>
              </div>
              <div className="flex-auto">
                <div className="text-right">
                  <span className="rounded border-2 text-xl p-1">
                    {categoryBy(data.lesson.category)}
                  </span>
                </div>
                <p
                  className="text-center text-2xl font-bold
                mt-4 border-b-4 border-teal-500"
                >
                  {data.lesson.title}
                </p>
                <p className="text-center text-2xl font-bold my-10">
                  ¥{data.lesson.price}/{data.lesson.time}min
                </p>
                <div className="text-center">
                  <button
                    className="text-white rounded-md bg-teal-500
                      py-2 px-4 text-xl font-bold"
                  >
                    予約リクエスト
                  </button>
                </div>
              </div>
            </div>
            <div className="flex my-4 py-1 border-b-2 text-xl">
              <p>内容</p>
            </div>
            <p className="text-xl">{data.lesson.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonDetail;
