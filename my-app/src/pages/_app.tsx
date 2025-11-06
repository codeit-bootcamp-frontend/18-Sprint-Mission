import { Wrapper } from "@/components/layout/container";
import Nav from "@/components/ui/nav";
import "@/styles/globals.css";
import { NextPageWithLayout } from "@/types/page";
import { AppProps } from "next/app";

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <>
        <Nav />
        {page}
      </>
    ));

  return getLayout(<Component {...pageProps} />);
}
