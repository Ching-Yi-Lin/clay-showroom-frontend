import Head from "next/head";
import Layout from "../components/layout";
import Button from "../components/button";
import { getLatestProductsData } from "../lib/products";
import styles from "../components/about.module.css"
export default function Home({ latestProductsData }) {
  return (
    <Layout home>
      <Head>
        <title>About | Clay Showroom</title>
      </Head>
      <section className="main-landing">
        <div className="content">
          <h1>WELCOME</h1>
          <p>
            A Ceramics Marketplace. Find hand-crafted pieces made by local
            ceramists or sell your unique ceramics
          </p>
          
        </div>
      </section>
      <section className={styles.about}>
      <div className={styles.content}>
        <h4>Clay Showroom</h4>
        <p className={styles.paragraph}>
           Connecting local ceramists with ceramic enthusiasts. We are an online platform where Ceramists can list and sell their products and the others can purchase their goods. <br/> <br/>
           Shop now or sell now by clicking the buttons below!<br/><br/>
          </p>
          <br/>
        </div>
        <Button text="SELL" url="/sell" />
          <span style={{ width: "10px", display: "inline-block"}}></span>
          <Button text="SHOP" url="/shop" />

      </section>

      <style jsx>
        {`
          .main-landing {
            margin: 0 auto;
            padding: 80px 20px;

            text-align: right;
            background: url(images/landing-bg.png) no-repeat center center fixed;
            background-size: cover;
          }

          .main-landing .content {
            // width: 80%;
          }
          .main-landing h1,
          p {
            color: white;
          }
          .sell-btn {
            color: black;
            margin-right: 10px;
          }
          .product-list .product-list-item {
            display: inline-block;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
  const latestProductsData = await getLatestProductsData();

  return {
    props: {
      latestProductsData,
    },
  };
}
