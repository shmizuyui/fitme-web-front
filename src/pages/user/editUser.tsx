import { useContext } from "react";
import { GlobalContainer } from "../../components/common/GlobalContainer";
import { EditForm } from "../../components/pages/user/EditForm";
import { AuthContext } from "../../hooks/user/useCurrentUser";

const EditUser = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext);
  return (
    <GlobalContainer title="編集画面">
      {isSignedIn && currentUser ? <EditForm /> : <h1>ログインしてください</h1>}
    </GlobalContainer>
  );
};

export default EditUser;
