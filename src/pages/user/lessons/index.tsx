import { useLessons } from "../../../hooks/user/useLessons";
import { Lessons as LessonList } from "../../../components/pages/user/lessons/Lessons";
import { Pagination } from "../../../components/common/Pagination";
import { GlobalContainer } from "../../../components/common/GlobalContainer";
import { Loading } from "../../../components/common/Loading";
import { Errors } from "../../../components/common/Errors";
import { useEffect } from "react";
import { LessonSearch } from "../../../components/pages/user/lessons/LessonSearch";
import { Empty } from "../../../components/common/Empty";
import { LessonSort } from "../../../components/pages/user/lessons/LessonSort";
const Lessons = () => {
  const {
    data,
    error,
    isLoading,
    fetchLessons,
    setFormParams,
    formParams,
    setOrder,
    order,
  } = useLessons();
  useEffect(() => {
    const category = localStorage.getItem("category");
    const params = {
      categories: category ? [category] : [],
      minPrice: null,
      maxPrice: null,
      genders: [],
    };
    setFormParams(params);
  }, []);

  useEffect(() => {
    if (!data && formParams) {
      fetchLessons(1, formParams, order);
      localStorage.removeItem("category");
    }
  }, [data, formParams]);

  if (error) return <Errors>{error}</Errors>;
  return (
    <GlobalContainer title="レッスン一覧">
      <LessonSearch
        setFormParams={setFormParams}
        fetchLessons={fetchLessons}
        formParams={formParams}
        order={order}
      />
      <LessonSort
        fetchLessons={fetchLessons}
        formParams={formParams}
        setOrder={setOrder}
      />
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
            onPageBack={() =>
              fetchLessons(data.current_page - 1, formParams, order)
            }
            onPageNext={() =>
              fetchLessons(data.current_page + 1, formParams, order)
            }
          />
        </>
      )}
    </GlobalContainer>
  );
};

export default Lessons;
