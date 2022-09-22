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

  async function processSubmission(event) {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      category: event.target.category.value,
      price: event.target.price.value,
      description: event.target.description.value,
      imageUrl: event.target.imageUrl.value,
      userId: "631efc036747752e94b7e365",
    };
  }



  return (
    <Layout home>
      <Head>
        <title>Product Details | Clay Showroom</title>
      </Head>
      <section className="sell">SHOP</section>

      <div className={styles.category}>
        <ul><a href="#" className={styles.category__name}>ALL</a></ul>
        <ul><a href="#" className={styles.category__name}>VASES</a></ul>
        <ul><a href="#" className={styles.category__name}>MUGS</a></ul>
        <ul><a href="#" className={styles.category__name}>OTHER</a></ul>
      </div>      
       
      <section className="your-products">
        <div className="product-list">

         
        <div className="product-list-item" key={product.id}>
              {product.name}
              <img src="images/landing-vase.png" alt="" />
              <img src={product.imageUrl} alt="" />
            </div>

              <div className="add-to-cart">
                <Button text="ADD TO CART" onClick={()=> deleteProduct(product.id)} />    
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

          .your-products, .contact-form{
            margin-top: 20px;
            margin-left: 45px;
            margin-right: 45px;
            padding: 30px;
            background-color: #F2EDE2
          }

          .contact-form{
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
