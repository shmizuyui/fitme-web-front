import Router from "next/router";
import { useContext } from "react";
import { apiClient } from "../../apis/client";
import { FormParams } from "../../components/pages/user/signUp/SignUpForm";
import { AuthContext } from "./useCurrentUser";

export const useSignUp = () => {
  const { setLoading, setCurrentUser, setIsSignedIn, setError } =
    useContext(AuthContext);
  const signUpUser = async (formParams: FormParams) => {
    const params = {
      name: formParams.name,
      gender: formParams.gender,
      email: formParams.email,
      password: formParams.password,
      password_confirmation: formParams.passwordConfirmation,
    };
    setLoading(true);
    await apiClient
      .post("/api/v1/user/auth", params)
      .then((response) => {
        setCurrentUser(response.data);
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
