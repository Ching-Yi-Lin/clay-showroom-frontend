import Head from "next/head";
import Layout from "../components/layout";

export default function Home({ }) {
  return (
    <Layout home>
      <Head>
        <title>Shop | Clay Showroom</title>
      </Head>
      <section className="shop">Shop Page</section>

      <style jsx>
        {`
          h2 {
            color: green;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
 
  return {
    props: {
     
    },
  };
}
