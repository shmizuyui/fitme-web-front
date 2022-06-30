import { useState } from "react";
import { Pagination } from "../../../components/common/Pagination";
import { Trainers as TrainersList } from "../../../components/pages/user/trainers/Trainers";
import { useTrainers } from "../../../hooks/user/useTrainers";

const Trainers = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error, isLoading, isError } = useTrainers(pageIndex);

  if (isError) return <p className="pt-32">Failed to load</p>;
  if (error) return <p className="pt-32">{error}</p>;

  return (
    <div className="h-screen w-2/3 mx-auto">
      <div className="pt-32">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <TrainersList trainers={data.trainers} />
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

export default Trainers;
