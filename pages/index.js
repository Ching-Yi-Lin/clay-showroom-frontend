import Head from "next/head";
import Layout from "../components/layout";

import { getLatestProductsData } from "../lib/products";

export default function Home({ latestProductsData }) {
  return (
    <Layout home>
      <Head>
        <title>Home | Clay Showroom</title>
      </Head>
      <section className="main-landing">Main Landing section</section>
      <section className="latest-products">
        <h2>Latest Products</h2>
        <div className="product-list">
          {latestProductsData.products.map(({ id, title }) => (
            <div className="product-list-item" key={id}>
              {title}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const latestProductsData = getLatestProductsData();

  return {
    props: {
      latestProductsData,
    },
  };
}
