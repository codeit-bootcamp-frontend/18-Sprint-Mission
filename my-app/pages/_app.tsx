import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayout from "../src/components/global-layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </div>
  );
}
