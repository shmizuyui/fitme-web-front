import {useRouter} from 'next/router';
import {TrainerDetail} from
  '../../../components/pages/user/trainers/Trainers/TrainerDetail';
import {useTrainer} from '../../../hooks/user/useTrainer';

const Trainer = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, error, isLoading, isError} = useTrainer(String(id));

  if (isError) return <p>{error}</p>;

  return (
    <div className="h-screen w-2/3 mx-auto">
      <div className="pt-32">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TrainerDetail trainer={data.trainer} />
        )}
      </div>
    </div>
  );
};

export default Trainer;
