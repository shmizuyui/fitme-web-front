import "../styles/globals.css";
import Head from "next/head";
import { GlobalNav } from "../components/common/GlobalNav";
import { AuthContext, useCurrentUser } from "../hooks/user/useCurrentUser";
import { useEffect } from "react";
import { Errors } from "../components/common/Errors";

const MyApp = ({ Component, pageProps }) => {
  const {
    getCurrentUser,
    loading,
    setLoading,
    isSignedIn,
    setIsSignedIn,
    currentUser,
    setCurrentUser,
    error,
    setError,
  } = useCurrentUser();
  useEffect(() => {
    getCurrentUser();
  }, [setCurrentUser]);

  if (error) return <Errors>{error}</Errors>;

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        isSignedIn,
        setIsSignedIn,
        currentUser,
        setCurrentUser,
        error,
        setError,
      }}
    >
      <Head>
        <title>Fitme</title>
        <link rel="app icon" href="/icon.jpg" />
      </Head>
      <GlobalNav />
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
};

export default MyApp;
