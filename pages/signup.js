import Head from "next/head";
import Layout from "../components/layout";

export default function Home({ }) {
  return (
    <Layout home>
      <Head>
        <title>Sign Up | Clay Showroom</title>
      </Head>
      <section className="sign-up">Sign Up Page</section>

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
