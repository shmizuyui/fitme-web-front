import { GlobalContainer } from "../../components/common/GlobalContainer";
import { SignUpForm } from "../../components/pages/user/SignUpForm";

const SignUp = () => {
  return (
    <GlobalContainer title="新規登録">
      <SignUpForm />
    </GlobalContainer>
  );
};

export default SignUp;
