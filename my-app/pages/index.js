import Button from "@/components/button/button";
import { BUTTON_TYPE } from "@/components/button/button-type";
import SearchInput from "@/components/input/search-input";
import GlobalNavBar from "@/components/nav-bar/global-nav-bar";
import styles from "@/styles/home.module.css";
import Head from "next/head";

export default function Home() {
  const handleAddClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Do It</title>
        <meta
          name="description"
          content="A productivity app to help you get things done"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <GlobalNavBar />
        <main className={styles.main}>
          <div className={styles.content}>
            <form className={styles.searchForm}>
              <SearchInput />
              <Button type={BUTTON_TYPE.add} onClick={handleAddClick}>
                추가하기
              </Button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
