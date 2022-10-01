import { GlobalContainer } from "../../components/common/GlobalContainer";
import { Loading } from "../../components/common/Loading";
import { Profile } from "../../components/pages/user/myPage/Profile.tsx";
import { Reservations } from "../../components/pages/user/myPage/Reservations";
import { useReservations } from "../../hooks/user/useReservations";

const MyPage = () => {
  const { data, isLoading } = useReservations();
  return (
    <GlobalContainer title="マイページ">
      <Profile />
      {isLoading ? (
        <Loading />
      ) : (
        <Reservations reservations={data.reservations} />
      )}
    </GlobalContainer>
  );
};

export default MyPage;
