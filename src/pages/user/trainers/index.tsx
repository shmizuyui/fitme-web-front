import { useState } from "react";
import { Errors } from "../../../components/common/Errors";
import { GlobalContainer } from "../../../components/common/GlobalContainer";
import { Loading } from "../../../components/common/Loading";
import { Pagination } from "../../../components/common/Pagination";
import { Trainers as TrainersList } from "../../../components/pages/user/trainers/Trainers";
import { useTrainers } from "../../../hooks/user/useTrainers";

const Trainers = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error, isLoading } = useTrainers(pageIndex);

  if (error) return <Errors>{error}</Errors>;

  return (
    <GlobalContainer title="トレーナー一覧">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TrainersList trainers={data.trainers} />
          <Pagination
            isFirstPage={data.current_page === 1}
            isLastPage={
              data.current_page === data.total_page ||
              data.trainers.length === 0
            }
            onPageBack={() => setPageIndex(pageIndex - 1)}
            onPageNext={() => setPageIndex(pageIndex + 1)}
          />
        </>
      )}
    </GlobalContainer>
  );
};

export default Trainers;
