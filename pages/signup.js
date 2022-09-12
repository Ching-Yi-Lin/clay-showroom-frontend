import Head from "next/head";
import Layout from "../components/layout";

export default function Home({ }) {
  return (
    <Layout home>
      <Head>
        <title>Sign Up | Clay Showroom</title>
      </Head>
      {/* <section className="sign-up">Sign Up Page</section>
      <form action="/send-data-here" method="post">
  <label for="first">First name:</label>
  <input type="text" id="first" name="first" />
  <label for="last">Last name:</label>
  <input type="text" id="last" name="last" />
  <button type="submit">Submit</button>
</form> */}

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
