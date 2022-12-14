import Head from "next/head";
import Layout from "../components/layout";
import Button from "../components/button";
import { getLatestProductsData } from "../lib/products";
import Link from "next/link";
import { isLoggedIn } from "../lib/users";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


export default function Home({ latestProductsData }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  async function checkLogIn() {
    let isLoggedInUser = await isLoggedIn();
    if (!isLoggedInUser) {
      router.push("/signin");
    } else {
      router.push("/sell");
    }
  }
   

  return (
    <Layout home>
      <Head>
        <title>Home | Clay Showroom</title>
      </Head>
      <div className="main-landing">
        <div className="content">
          <h1>WELCOME</h1>
          <p>
            A Ceramics Marketplace. Find hand-crafted pieces made by local
            ceramists or sell your unique ceramics
          </p>
          <Button text="SELL" onClick={checkLogIn} />
          <span style={{ width: "10px", display: "inline-block" }}></span>
          <Button text="SHOP" url="/shop" />
        </div>
      </div>
      <section className="latest-products">
        <h2>Latest Products</h2>

        <div className="product-list">
          {latestProductsData.products.slice(0, 3).map((product) => (
            <div className="product-list-item" key={product.id}>
              <Link href={`/product-details?id=${product.id}`}>
                <img src={product.imageUrl} alt="" />
              </Link>
            </div>
          ))}
        </div>
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

          h1 {
            margin-top: -4px;
            margin-bottom: 13px;
          }

          .main-landing .content {
            // width: 80%;
          }
          .main-landing h1 {
            color: white;
          }
          .main-landing p {
            color: black;
            font: bold;
          }
          .sell-btn {
            color: black;
            margin-right: 10px;
          }
          .product-list {
            display: flex;
            justify-content: center;
          }
          .product-list-item {
            flex: 1;
            display: flex;
            justify-content: center;
          }
          h2 {
            font-size: large;
            font-family: Montserrat;
            margin-left: 24px;
            margin-top: 22px;
            font-weight: lighter;
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
