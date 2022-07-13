import { useEffect } from "react";
import { Errors } from "../../../components/common/Errors";
import { GlobalContainer } from "../../../components/common/GlobalContainer";
import { Loading } from "../../../components/common/Loading";
import { Pagination } from "../../../components/common/Pagination";
import { Trainers as TrainersList } from "../../../components/pages/user/trainers/Trainers";
import { TrainerSearch } from "../../../components/pages/user/trainers/TrainerSearch";
import { useTrainers } from "../../../hooks/user/useTrainers";

const Trainers = () => {
  const { data, error, isLoading, fetchTrainers, formParams, setFormParams } =
    useTrainers();

  useEffect(() => {
    if (!data) fetchTrainers(1, formParams);
  }, [data]);

  if (error) return <Errors>{error}</Errors>;

  return (
    <GlobalContainer title="トレーナー一覧">
      <TrainerSearch
        fetchTrainers={fetchTrainers}
        setFormParams={setFormParams}
      />
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
            onPageBack={() => fetchTrainers(data.current_page - 1, formParams)}
            onPageNext={() => fetchTrainers(data.current_page + 1, formParams)}
          />
        </>
      )}
    </GlobalContainer>
  );
};

export default Trainers;
