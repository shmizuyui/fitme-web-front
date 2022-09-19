import { useLessons } from "../../../hooks/user/useLessons";
import { Lessons as LessonList } from "../../../components/pages/user/lessons/Lessons";
import { Pagination } from "../../../components/common/Pagination";
import { GlobalContainer } from "../../../components/common/GlobalContainer";
import { Loading } from "../../../components/common/Loading";
import { Errors } from "../../../components/common/Errors";
import { useEffect } from "react";
import { LessonSearch } from "../../../components/pages/user/lessons/LessonSearch";
import { Empty } from "../../../components/common/Empty";

const Lessons = () => {
  const { data, error, isLoading, fetchLessons, setFormParams, formParams } =
    useLessons();

  useEffect(() => {
    if (!data) fetchLessons(1, formParams);
    const category = localStorage.getItem("category");
    if (category) {
      setFormParams({
        categories: ["category"],
        minPrice: null,
        maxPrice: null,
        genders: [],
      });
      localStorage.removeItem("category");
    }
  }, [data]);

  if (error) return <Errors>{error}</Errors>;

  return (
    <GlobalContainer title="レッスン一覧">
      <LessonSearch />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!data.lessons.length ? (
            <Empty />
          ) : (
            <LessonList lessons={data.lessons} />
          )}
          <Pagination
            isFirstPage={data.current_page === 1}
            isLastPage={
              data.current_page === data.total_page || data.lessons.length === 0
            }
            onPageBack={() => fetchLessons(data.current_page - 1, formParams)}
            onPageNext={() => fetchLessons(data.current_page + 1, formParams)}
          />
        </>
      )}
    </GlobalContainer>
  );
};

export default Lessons;
