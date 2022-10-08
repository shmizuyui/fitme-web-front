import { createContext, useState } from "react";
import { apiClient } from "../../apis/client";
import { User } from "../../apis/models/user";

export const AuthContext = createContext(
  {} as {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: User | undefined;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
  }
);

export const useCurrentUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  console.log(currentUser);
  const [error, setError] = useState<string>("");

  const getCurrentUser = async () => {
    const token = localStorage.getItem("_access_token");
    const client = localStorage.getItem("_client");
    const uid = localStorage.getItem("_uid");

    if (!token || !client || !uid) return;

    setLoading(true);
    await apiClient
      .get("/api/v1/user/auth/sessions", {
        headers: {
          access_token: token,
          client: client,
          uid: uid,
        },
      })
      .then((response) => {
        setIsSignedIn(true);
        setCurrentUser(response?.data.data);
      })
      .catch(() => setError("No current user"));
    setLoading(false);
  };
  return {
    getCurrentUser,
    loading,
    setLoading,
    isSignedIn,
    setIsSignedIn,
    currentUser,
    setCurrentUser,
    error,
    setError,
  };
};
