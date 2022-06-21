import {useLessons} from '../../../hooks/user/useLessons';
import {Lessons as LessonList} from
  '../../../components/pages/user/lessons/Lessons';
import {Pagination} from '../../../components/common/Pagination';
import {useState} from 'react';

const Lessons = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const {data, error, isLoading, isError} = useLessons(pageIndex);

  if (isError) return <p className="pt-32">Failed to load</p>;
  if (error) return <p className="pt-32">{error}</p>;

  return (
    <div className="h-screen w-2/3 mx-auto">
      <div className="pt-32">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <LessonList lessons={data.lessons} />
            <Pagination
              isFirstPage={pageIndex === 1}
              isLastPage={data.is_last_page}
              onPageBack={() => setPageIndex(pageIndex - 1)}
              onPageNext={() => setPageIndex(pageIndex + 1)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Lessons;
