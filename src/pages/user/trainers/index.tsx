import { useEffect } from "react";
import { Errors } from "../../../components/common/Errors";
import { GlobalContainer } from "../../../components/common/GlobalContainer";
import { Loading } from "../../../components/common/Loading";
import { Pagination } from "../../../components/common/Pagination";
import { Trainers as TrainersList } from "../../../components/pages/user/trainers/Trainers";
import { TrainerSearch } from "../../../components/pages/user/trainers/TrainerSearch";
import { TrainerSort } from "../../../components/pages/user/trainers/TrainerSort";
import { useTrainers } from "../../../hooks/user/useTrainers";

const Trainers = () => {
  const {
    data,
    error,
    isLoading,
    fetchTrainers,
    formParams,
    setFormParams,
    order,
    setOrder,
  } = useTrainers();

  useEffect(() => {
    if (!data) fetchTrainers(1, formParams, order);
  }, [data]);

  if (error) return <Errors>{error}</Errors>;

  return (
    <GlobalContainer title="トレーナー一覧">
      <TrainerSearch
        fetchTrainers={fetchTrainers}
        setFormParams={setFormParams}
        order={order}
      />
      <TrainerSort
        fetchTrainers={fetchTrainers}
        formParams={formParams}
        setOrder={setOrder}
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
            onPageBack={() =>
              fetchTrainers(data.current_page - 1, formParams, order)
            }
            onPageNext={() =>
              fetchTrainers(data.current_page + 1, formParams, order)
            }
          />
        </>
      )}
    </GlobalContainer>
  );
};

export default Trainers;
