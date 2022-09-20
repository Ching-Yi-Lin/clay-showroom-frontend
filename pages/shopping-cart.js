import Head from "next/head";
import Layout from "../components/layout";
import Button from "../components/button";
import { getLatestProductsData } from "../lib/products";

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

              <div className="delete-button">
                <Button text="DELETE" onClick={()=> deleteProduct(product.id)} />    
              </div> 
              
            </div>
          ))}
        </div>
        
        <div className="create-button">
            <Button text="MAKE A PAYMENT" type="button"/>
        </div>
        
      </section>

      <style jsx>
        {`
          .sell {
            margin-top: 11px;
            margin-left: 45px;
            padding-top: 6px;
          }

          .your-products{
            margin-left: 45px;
            margin-right: 45px;
            padding: 20px;
            background-color: #F2EDE2
          }

          .delete-button {
            display: inline-block;
            border: 1px solid red;
            padding: 20px;
            
          }

          .create-button {
            margin: auto;
            margin-bottom:90px;
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
