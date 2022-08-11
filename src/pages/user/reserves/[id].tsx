import { useRouter } from "next/router";
import { Errors } from "../../../components/common/Errors";
import { GlobalContainer } from "../../../components/common/GlobalContainer";
import { Loading } from "../../../components/common/Loading";
import { ReserveRequest } from "../../../components/pages/user/ReserveRequest";
import { useLesson } from "../../../hooks/user/useLesson";

const Reserve = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useLesson(String(id));

  if (error) return <Errors>{error}</Errors>;

  return (
    <GlobalContainer title="レッスン">
      {isLoading ? <Loading /> : <ReserveRequest lesson={data.lesson} />}
    </GlobalContainer>
  );
};

export default Reserve;
