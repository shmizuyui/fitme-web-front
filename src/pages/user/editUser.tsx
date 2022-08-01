import { useEffect } from "react";
import { GlobalContainer } from "../../components/common/GlobalContainer";
import { EditForm } from "../../components/pages/user/EditForm";
import { useEdit } from "../../hooks/user/useEdit";

const EditUser = () => {
  return (
    <GlobalContainer title="編集画面">
      <EditForm />
    </GlobalContainer>
  );
};

export default EditUser;
