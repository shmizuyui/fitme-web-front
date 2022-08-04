import Router from "next/router";
import { useContext } from "react";
import { apiClient } from "../../apis/client";
import { FormPrams } from "../../components/pages/user/SignUpForm";
import { AuthContext } from "./useCurrentUser";

export const useSignUp = () => {
  const { setLoading, setIsSignedIn, setCurrentUser, setError } =
    useContext(AuthContext);
  const signUpUser = async (formPrams: FormPrams) => {
    const params = {
      name: formPrams.name,
      name_kana: formPrams.nameKana,
      gender: formPrams.gender,
      email: formPrams.email,
      password: formPrams.password,
      password_confirmation: formPrams.passwordConfirmation,
    };
    setLoading(true);
    await apiClient
      .post("/api/v1/user/auth", params)
      .then((response) => {
        setCurrentUser(response.data.data);
        setIsSignedIn(true);
        localStorage.setItem("_access_token", response.headers["access-token"]);
        localStorage.setItem("_client", response.headers["client"]);
        localStorage.setItem("_uid", response.headers["uid"]);
        Router.push("/user/home");
      })
      .catch(() => setError("新規登録に失敗しました"));
    setLoading(false);
  };

  return {
    signUpUser,
  };
};
