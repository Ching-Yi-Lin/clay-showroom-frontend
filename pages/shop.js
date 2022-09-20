import Head from "next/head";
import Layout from "../components/layout";
import styles from "../components/shop.module.css";



export default function Home({ }) {
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
            <div class={styles.shop__item}>
                <img class={styles.shop__image} src="images/landing-vase.png" />
                <div class={styles.shop__item__details}>
                    <span class={styles.shop__item__price}>$70</span>
                    <span class={styles.btn__primary} >Vase</span>
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

    <section class={styles.shopcard}>
            <div class={styles.shop__item}>
                <img class={styles.shop__image} src="images/landing_vases.png" />
                <div class={styles.shop__item__details}>
                    <span class={styles.shop__item__price}>$150</span>
                    <span class={styles.btn__primary} >Vase duo</span>
                </div>
            </div>
    </section>

    <section class={styles.shopcard}>
            <div class={styles.shop__item}>
                <img class={styles.shop__image} src="images/landing-vase.png" />
                <div class={styles.shop__item__details}>
                    <span class={styles.shop__item__price}>$80</span>
                    <span class={styles.btn__primary} >Vase</span>
                </div>
            </div>
    </section>

</section>
    </Layout>
      );
    }
    
export async function getStaticProps() {
 
  return {
    props: {
     
    },
  };
}

