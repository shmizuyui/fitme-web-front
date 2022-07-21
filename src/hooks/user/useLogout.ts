import Router from "next/router";
import { useContext } from "react";
import { apiClient } from "../../apis/client";
import { AuthContext } from "./useCurrentUser";

export const useLogout = () => {
  const { setLoading, setIsSignedIn, setError } = useContext(AuthContext);
  const logoutUser = async () => {
    const token = localStorage.getItem("_access_token");
    const client = localStorage.getItem("_client");
    const uid = localStorage.getItem("_uid");

    if (!token || !client || !uid) return;

    setLoading(true);
    await apiClient
      .delete("/api/v1/user/auth/sign_out", {
        headers: {
          "access-token": token,
          client: client,
          uid: uid,
        },
      })
      .then(() => {
        localStorage.removeItem("_access_token");
        localStorage.removeItem("_client");
        localStorage.removeItem("_uid");
        setIsSignedIn(false);
        Router.push("/user");
      })
      .catch(() => setError("ログアウトに失敗しました"));
    setLoading(false);
  };

  return {
    logoutUser,
  };
};
