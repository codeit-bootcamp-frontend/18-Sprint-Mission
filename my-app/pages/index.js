import Head from "next/head";

export default function Home() {
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
        <main>
          <h1>Welcome to Do It</h1>
        </main>
      </div>
    </>
  );
}
