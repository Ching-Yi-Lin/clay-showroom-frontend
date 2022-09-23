import Head from "next/head";
import Layout from "../components/layout";
import Button from "../components/button";
import { createProduct, getProductById, updateProduct } from "../lib/products";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ContactForm from "../components/contact-form";
import styles from "../components/shop.module.css";

export default function Home({}) {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
  });
  useEffect(async () => {
    const res = await getProductById(router.query.id);
    setProduct(res.product);
  }, [router.query]);

  return (
    <Layout home>
      <Head>
        <title>Product Details | Clay Showroom</title>
      </Head>
      <section className="sell">SHOP</section>

      <div className={styles.category}>
        <ul>
          <a href="#" className={styles.category__name}>
            ALL
          </a>
        </ul>
        <ul>
          <a href="#" className={styles.category__name}>
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

      <section className="your-products">
        <div className="product-list">
          <div className="product-list-item" key={product.id}>
            <img src={product.imageUrl} alt="" />

            <h1>
              {product.name} / ${product.price}
            </h1>
            <h2>Artist | John Doe</h2>
            <p>
              Porcelain, wheel-thrown vase with a between matte and dew glaze
            </p>
            <p className="size">Dimensions: 27cm x 10 cm</p>
          </div>

          <div className="add-to-cart">
            <Button text="ADD TO CART" />
          </div>
        </div>
      </section>

      <div className="App">
        <header className="App-header">
          <div className="contact-form">
            <ContactForm />
          </div>
        </header>
      </div>

      <style jsx>
        {`
          .sell {
            margin-top: 11px;
            margin-left: 45px;
            padding-top: 6px;
          }

          img {
            width: 100%;
          }
          h1 {
            font-size: small;
          }
          h2 {
            font-size: large;
          }
          .size {
            font-size: 12px;
          }

          .your-products,
          .contact-form {
            margin-top: 20px;
            margin-left: 45px;
            margin-right: 45px;
            padding: 30px;
            background-color: #f2ede2;
          }

          .contact-form {
            margin-bottom: 90px;
          }

          .add-to-cart {
            display: inline-block;
          }
        `}
      </style>
    </Layout>
  );
}
