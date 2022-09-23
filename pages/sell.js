import Head from "next/head";
import Layout from "../components/layout";
import Button from "../components/button";
import { getLatestProductsData, deleteProduct } from "../lib/products";
import Link from "next/link";

export default function Home({ latestProductsData }) {
  async function deleteItem(id) {
    await deleteProduct(id).then(() => {
      window.location.reload();
    });
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
            <div className="product-list-item">
              <div className="product-title">
                {" "}
                {product.name} ${product.price}{" "}
              </div>
              <div className="product-image" key={product.id}>
                <img src={product.imageUrl} alt="" />
              </div>
              <div className="edit-delete-buttons">
                <Button
                  text="EDIT"
                  url={`/add-edit?type=edit&id=${product.id}`}
                />
                <span style={{ margin: "5px", display: "inline-block" }}></span>
                <Button text="DELETE" onClick={() => deleteItem(product.id)} />
              </div>
            </div>
          ))}
        </div>

        <div className="create-button">
          <Link href="/add-edit?type=add">
            <a>
              <Button text="CREATE NEW PRODUCT" />
            </a>
          </Link>
        </div>
      </section>

      <style jsx>
        {`
          .sell {
            margin-top: 11px;
            margin-left: 45px;
            padding-top: 6px;
          }

          .your-products {
            padding: 20px;
          }

          .product-list-item {
            margin-bottom: 20px;
            background-color: #f2ede2;
          }

          .product-list {
            padding: 25px;
            flex: 1;
            justify-content: center;
          }

          .product-image,
          .product-title {
            flex: 1;
            display: flex;
            justify-content: center;
            padding: 10px;
          }

          .edit-delete-buttons {
            justify-content: center;
            display: flex;
            padding: 20px;
          }

          .create-button {
            display: flex;
            justify-content: center;
            margin-bottom: 90px;
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
