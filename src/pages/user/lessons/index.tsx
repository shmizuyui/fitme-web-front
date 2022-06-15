import {useLessons} from '../../../hooks/user/useLessons';
import {Lessons as LessonList} from
  '../../../components/pages/user/lessons/Lessons';

const Lessons = () => {
  const {data: lessons, error, isLoading, isError} = useLessons();

  if (isError) return <p className="pt-32">Failed to load</p>;
  if (error) return <p className="pt-32">{error}</p>;

  return (
    <div className="h-screen w-2/3 mx-auto">
      <div className="pt-32">
        {isLoading ? <p>Loading...</p> : <LessonList lessons={lessons} />}
      </div>
    </div>
  );
};

export default Lessons;
