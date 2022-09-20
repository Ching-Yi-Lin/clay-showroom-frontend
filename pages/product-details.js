import Head from "next/head";
import Layout from "../components/layout";
import Button from "../components/button";
import { getLatestProductsData } from "../lib/products";
import { useEffect } from "react";
import ContactForm from "../components/contact-form";



export default function Home({ latestProductsData }) {
  function deleteProduct(id){
    
  }
  return (
    <Layout home>
      <Head>
        <title>Shopping Cart | Clay Showroom</title>
      </Head>
      <section className="sell">YOUR CART</section>
       
      <section className="your-products">
        <div className="product-list">

          {latestProductsData.products.map((product) => (
            <div className="product-list-item" key={product.id}>
              
              <img src="images/landing-vase.png" alt="" />
              {product.title}

              <div className="add-to-cart">
                <Button text="ADD TO CART" onClick={()=> deleteProduct(product.id)} />    
              </div> 
              
            </div>
          ))}
        </div>
        
      </section>
<br></br>

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

          .create-button {
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
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

