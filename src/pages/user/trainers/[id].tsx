import { useRouter } from "next/router";
import { Errors } from "../../../components/common/Errors";
import { GlobalContainer } from "../../../components/common/GlobalContainer";
import { Loading } from "../../../components/common/Loading";
import { TrainerDetail } from "../../../components/pages/user/trainers/Trainers/TrainerDetail";
import { useTrainer } from "../../../hooks/user/useTrainer";

const Trainer = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useTrainer(String(id));

  if (error) return <Errors>{error}</Errors>;

  return (
    <GlobalContainer title="トレーナー詳細">
      {isLoading ? <Loading /> : <TrainerDetail trainer={data.trainer} />}
    </GlobalContainer>
  );
};

export default Trainer;
