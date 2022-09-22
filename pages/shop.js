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
      <ul><a href="#" className={styles.category__name}>ALL</a></ul>
      <ul><a href="/shop-vases" className={styles.category__name}>VASES</a></ul>
      <ul><a href="#" className={styles.category__name}>MUGS</a></ul>
      <ul><a href="#" className={styles.category__name}>OTHER</a></ul>
        </div>
    
<h4 class={styles.shop__title}>LATEST PRODUCTS</h4>

<section class={styles.container}>
  <section class={styles.shopcard}>
  {latestProductsData.products.map((product) => (
            <div class={styles.shop__item}>
                   <Link href="/product-details">
                <img class={styles.shop__image} src={product.imageUrl}/></Link>
                <div class={styles.shop__item__details}>
                    <span class={styles.shop__item__name} > {product.name}</span>
                    <span class={styles.shop__item__price}>{product.price}</span>
                </div>
            </div>
          ))}</section>
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


