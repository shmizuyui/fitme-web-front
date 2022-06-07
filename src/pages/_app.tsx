import "../styles/globals.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Fitme</title>
        <link rel="app icon" href="/sample.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
