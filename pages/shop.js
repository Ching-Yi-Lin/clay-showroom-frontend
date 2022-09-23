import Head from "next/head";
import Layout from "../components/layout";
import styles from "../components/shop.module.css";
import Link from "next/link";
import { getLatestProductsData } from "../lib/products";

export default function Home({ latestProductsData }) {
  return (
    <Layout home>
      <Head>
        <title>Shop | Clay Showroom</title>
      </Head>
      <section className={styles.shop}>SHOP</section>
      <div className={styles.category}>
        <ul>
          <a href="#" className={styles.category__name}>
            ALL
          </a>
        </ul>
        <ul>
          <a href="/shop-vases" className={styles.category__name}>
            VASES
          </a>
        </ul>
        <ul>
          <a href="#" className={styles.category__name}>
            MUGS
          </a>
        </ul>
        <ul>
          <a href="#" className={styles.category__name}>
            OTHER
          </a>
        </ul>
      </div>

      <h4 className={styles.shop__title}>LATEST PRODUCTS</h4>

      <section className={styles.container}>
        {latestProductsData.products.map((product) => (
          <Link href={`/product-details?id=${product.id}`}>
            <div className={styles.shopcard}>
              <div className={styles.shop__item}>
                <img className={styles.shop__image} src={product.imageUrl} />
                <div className={styles.shop__item__details}>
                  <span className={styles.shop__item__price}>${product.price}</span>
                  <span className={styles.btn__primary}>{product.name}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
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
