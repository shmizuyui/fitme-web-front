import { useRouter } from "next/router";
import { useLesson } from "../../../hooks/user/useLesson";
import { categoryBy } from "../../../lib/categoryBy";

export const LessonDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isError, isLoading } = useLesson(String(id));

  if (isError) return <p>{error}</p>;

  return (
    <div className="h-screen w-3/5 mx-auto">
      <div className="pt-32">
        <h1 className="font-bold my-2">レッスン詳細やで</h1>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <div>
            <p>{data.lesson.title}</p>
            <p>{data.lesson.price}円</p>
            <p>{data.lesson.time}分</p>
            <p>{categoryBy(data.lesson.category)}</p>
            <p>{data.lesson.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonDetail;
