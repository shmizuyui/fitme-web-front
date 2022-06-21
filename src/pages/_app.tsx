import "../styles/globals.css";
import Head from "next/head";
import { GlobalNav } from "../components/common/GlobalNav";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Fitme</title>
        <link rel="app icon" href="/icon.jpg" />
      </Head>
      <GlobalNav />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
