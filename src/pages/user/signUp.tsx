import { GlobalContainer } from "../../components/common/GlobalContainer";
import { SingUpForm } from "../../components/pages/user/signUp/SignUpForm";

const SingUp = () => {
  return (
    <GlobalContainer title="新規登録">
      <SingUpForm />
    </GlobalContainer>
  );
};

export default SingUp;
