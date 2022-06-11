import { useLessons } from "../../../hooks/user/useLessons";
import { Lessons as LessonList } from "../../../components/pages/user/lessons/Lessons";
import { useState } from "react";
import { Pagination } from "../../../components/common/Pagination";

const Lessons = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error, isLoading, isError } = useLessons(pageIndex);

  if (isError) return <p>{error}</p>;

  return (
    <div className="h-screen w-3/5 mx-auto">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <LessonList lessons={data.lessons} />
          <Pagination
            isFirstPage={data.is_first_page}
            isLastPage={data.is_last_page}
            onPageBack={() => setPageIndex(pageIndex - 1)}
            onPageNext={() => setPageIndex(pageIndex + 1)}
          />
        </>
      )}
    </div>
  );
};

export default Lessons;
