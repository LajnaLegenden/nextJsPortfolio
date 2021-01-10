import Head from "next/head";
import NameDisplay from "../components/Home/NameDisplay";

export default function Home({ props }) {
  return (
    <>
      <Head>
        <title>Linus Jansson</title>
      </Head>

      <main
        className={"container"}
        style={{
          height: "100hv",
          display: "block",
        }}
      >
        <NameDisplay />
        <div className="bgColor"></div>
      </main>
    </>
  );
}
