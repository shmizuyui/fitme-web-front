import Router from "next/router";
import { useContext } from "react";
import { apiClient } from "../../apis/client";
import { FormPrams } from "../../components/pages/user/LoginForm";
import { AuthContext } from "./useCurrentUser";

export const useLogin = () => {
  const { setLoading, setIsSignedIn, setCurrentUser, setError } =
    useContext(AuthContext);
  const loginUser = async (formPrams: FormPrams) => {
    const params = {
      email: formPrams.email,
      password: formPrams.password,
    };
    setLoading(true);
    await apiClient
      .post("/api/v1/user/auth/sign_in", params)
      .then((response) => {
        setCurrentUser(response.data);
        setIsSignedIn(true);
        localStorage.setItem("_access_token", response.headers["access-token"]);
        localStorage.setItem("_client", response.headers["client"]);
        localStorage.setItem("_uid", response.headers["uid"]);
        Router.push("/user/home");
      })
      .catch(() => setError("ログインできません"));
    setLoading(false);
  };

  return {
    loginUser,
  };
};
