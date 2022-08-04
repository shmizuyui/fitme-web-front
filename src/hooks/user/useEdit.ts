import Router from "next/router";
import { useContext } from "react";
import { apiClient } from "../../apis/client";
import { FormParams } from "../../components/pages/user/EditForm";
import { AuthContext } from "./useCurrentUser";

export const useEdit = () => {
  const { setLoading, setIsSignedIn, setCurrentUser, setError } =
    useContext(AuthContext);
  const editUser = async (formParams: FormParams) => {
    const token = localStorage.getItem("_access_token");
    const client = localStorage.getItem("_client");
    const uid = localStorage.getItem("_uid");
    const params = {
      name: formParams.name,
      name_kana: formParams.nameKana,
      email: formParams.email,
      password: formParams.password,
      password_confirmation: formParams.passwordConfirmation,
    };

    if (!token || !client || !uid) return;
    setLoading(true);
    await apiClient
      .put("/api/v1/user/auth", params, {
        headers: {
          access_token: token,
          client: client,
          uid: uid,
        },
      })
      .then((response) => {
        setCurrentUser(response.data.data);
        setIsSignedIn(true);
        localStorage.setItem("_access_token", response.headers["access-token"]);
        localStorage.setItem("_client", response.headers["client"]);
        localStorage.setItem("_uid", response.headers["uid"]);
        Router.push("/user/myPage");
      })
      .catch(() => setError("ユーザー情報の編集に失敗しました"));
    setLoading(false);
  };

  return {
    editUser,
  };
};
