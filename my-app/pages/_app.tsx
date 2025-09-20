import GlobalNavBar from "@/components/nav-bar/global-nav-bar";
import styles from "@/styles/app.module.css";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Do It</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalNavBar />
      <main className={styles.main}>
        <div className={styles.container}>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
