import { useLessons } from "../../../hooks/user/useLessons";
import { Lessons as LessonList } from "../../../components/pages/user/lessons/Lessons";

const Lessons = () => {
  const { data: lessons, error, isLoading, isError } = useLessons();

  if (isError) return <p>{error}</p>;

  return (
    <div className="h-screen w-3/5 mx-auto">
      <div className="pt-32">
        {isLoading ? <p>Loading...</p> : <LessonList lessons={lessons} />}
      </div>
    </div>
  );
};

export default Lessons;
