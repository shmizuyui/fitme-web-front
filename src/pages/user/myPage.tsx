import { GlobalContainer } from "../../components/common/GlobalContainer";
import { MyPageForm } from "../../components/pages/user/MyPageForm";
const MyPage = () => {
  return (
    <GlobalContainer title="マイページ">
      <MyPageForm />
    </GlobalContainer>
  );
};

export default MyPage;
