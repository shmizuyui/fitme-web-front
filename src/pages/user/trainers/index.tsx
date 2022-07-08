import {useState} from 'react';
import {Errors} from '../../../components/common/Errors';
import {GlobalContainer} from '../../../components/common/GlobalContainer';
import {Pagination} from '../../../components/common/Pagination';
import {Trainers as TrainersList} from '../../../components/pages/user/trainers/Trainers';
import {useTrainers} from '../../../hooks/user/useTrainers';

const Trainers = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const {data, error, isLoading} = useTrainers(pageIndex);

  if (error) return <Errors>{error}</Errors>;

  return (
    <GlobalContainer title='トレーナー一覧'>
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
    </GlobalContainer>
  );
};

export default Trainers;
