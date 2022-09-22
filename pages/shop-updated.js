import Head from "next/head";
import Layout from "../components/layout";
import styles from "../components/shop.module.css";
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
      <ul><a href="#" className={styles.category__name}>VASES</a></ul>
      <ul><a href="#" className={styles.category__name}>MUGS</a></ul>
      <ul><a href="#" className={styles.category__name}>OTHER</a></ul>
        </div>

        
        

<h4 class={styles.shop__title}>LATEST PRODUCTS</h4>

<section class={styles.container}>
  <section class={styles.shopcard}>
  {latestProductsData.products.map((product) => (
            <div class={styles.shop__item}>
                <img class={styles.shop__image} src={product.imageUrl}/>
                <div class={styles.shop__item__details}>
                    <span class={styles.shop__item__price}>{product.price}</span>
                    <span class={styles.btn__primary} > {product.name}</span>
                </div>
            </div>
          ))}</section>
          </section>

<section class={styles.container}>
    <section class={styles.shopcard}>
            <div class={styles.shop__item}>
                {latestProductsData.products.map((product) => (
            <div className="product-list-item" key={product.id}>
              {product.title}
              <img src={product.imageUrl}  class={styles.shop__image} alt="" />
            </div>
          ))}
                <div class={styles.shop__item__details}>
                {latestProductsData.products.map((product) => (
            <div className="product-list-item" key={product.id}>
              {product.title}
              <span class={styles.shop__item__price}> {product.price} </span>
            </div>
          ))}
{latestProductsData.products.map((product) => (
            <div className="product-list-item" key={product.id}>
              {product.title}
              <span class={styles.shop__item__price} src={product.price}> {product.name} </span>
            </div>
          ))}
                </div>
            </div>
    </section>

    <section class={styles.shopcard}>
            <div class={styles.shop__item}>
                <img class={styles.shop__image} src="images/landing_mug.png" />
                <div class={styles.shop__item__details}>
                    <span class={styles.shop__item__price}>$40</span>
                    <span class={styles.btn__primary} >mug</span>
                </div>
            </div>
    </section>
     </section>
     
     <section class={styles.container}>{latestProductsData.products.map((product) => (
             <section class={styles.shopcard}>
            <div class={styles.shop__item}>
                <img class={styles.shop__image} src="images/landing-vase.png" />
                <div class={styles.shop__item__details}>
                    <span class={styles.shop__item__price}>$70</span>
                    <span class={styles.btn__primary} >Vase</span>
                </div>
            </div>
    </section>
          ))}</section>
     
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


