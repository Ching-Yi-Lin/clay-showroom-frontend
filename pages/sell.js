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
        <div className="centre">
          <div className="product-list">
            
            {latestProductsData.products.map((product) => (
            
              <div className="float-child">
                <div className="product-list-item" key={product.id}>                
                  <img src="images/landing-vase.png" alt="" />
                  {product.title}  
                </div>

              <div className="float-child">
                <div className="edit-delete-buttons"> 
                  <Button text="EDIT" url="/add-edit" />
                  <span style={{ margin: "5px", display: "inline-block"}}></span>
                  <Button text="DELETE" onClick={()=> deleteProduct(product.id)} />    
                </div> 
              </div>
            </div>
            ))}
            
          </div>
        </div>
        
        <div className="create-button">
            <Button text="CREATE NEW PRODUCT" type="button" url="/add-edit" />
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

          .product-list {
            border: 2px solid green;
            width: 80%;
            padding: 20px;
          }

          .product-list-item {
            border: 2px solid blue;
            width: 150px;
          
          }

          .float-child {
             float: left;
             border: 2px solid black;
             width: 50%;
          }
           

          .edit-delete-buttons {
            float: right;
            border: 1px solid red;
            padding: 0px;
            
          }

          .create-button {
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .centre {
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
