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
        <title>Sell | Clay Showroom</title>
      </Head>
      <section className="sell">YOUR PRODUCTS</section>
       
      <section className="your-products">
        <div className="product-list">

          {latestProductsData.products.map((product) => (
            <div className="product-list-item" key={product.id}>
              
              <img src="images/landing-vase.png" alt="" />
              {product.title}

              <div className="edit-delete-buttons"> 
                <Button text="EDIT" url="/add-edit" />
                <Button text="DELETE" onClick={()=> deleteProduct(product.id)} />    
              </div> 
              
            </div>
          ))}
        </div>
        
        <div className="create-button">
            <button type="button" className="button is-button">
              CREATE NEW PRODUCT
            </button>
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

          .edit-delete-buttons {
            display: inline-block;
            border: 1px solid red;
            padding: 20px;
            
          }

          button {
            flex: 1;
            display: block;
            padding: 10px;
            font-weight: bold;
            font-size: 1em;
            color: #fff;
            letter-spacing: 0.5px;
            border-radius: 30px;
            background: var(--secondary-color);
            border: none;
            outline: none;
            transition: all 200ms;
          }
          button:hover {
            cursor: pointer;
            background: rgba(255, 56, 56, 0.7);
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
