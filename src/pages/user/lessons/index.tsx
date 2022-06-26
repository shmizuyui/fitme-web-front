import { Lessons as LessonList } from "../../../components/pages/user/lessons/Lessons";
import { Pagination } from "../../../components/common/Pagination";
import { useEffect } from "react";
import { useLessons } from "../../../hooks/user/useLessons";
import { Loading } from "../../../components/common/Loading";
import { GlobalContainer } from "../../../components/common/GlobalContainer";
import { Errors } from "../../../components/common/Errors";
import { Empty } from "../../../components/common/Empty";
import { SearchForm } from "../../../components/pages/user/lessons/SearchForm";

const Lessons = () => {
  const { data, error, isLoading, fetchLessons, setFormParams, formParams } =
    useLessons();

  useEffect(() => {
    if (!data) fetchLessons(1, formParams);
  }, [data]);

  if (error) return <Errors>{error}</Errors>;

  return (
    <GlobalContainer title="レッスン一覧">
      <SearchForm fetchLessons={fetchLessons} setFormParams={setFormParams} />
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
