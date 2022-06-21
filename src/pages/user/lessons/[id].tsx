import {useRouter} from 'next/router';
import {LessonDetail} from
  '../../../components/pages/user/lessons/Lessons/LessonDetail';
import {useLesson} from '../../../hooks/user/useLesson';

const LessonId = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, error, isLoading, isError} = useLesson(String(id));

  if (isError) return <p>{error}</p>;

  return (
    <div className="h-screen w-2/3 mx-auto">
      <div className="pt-32">
        {isLoading ? <p>Loading...</p> : <LessonDetail lesson={data.lesson} />}
      </div>
    </div>
  );
};

export default LessonId;
