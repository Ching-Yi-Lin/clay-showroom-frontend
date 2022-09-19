import Head from "next/head";
import Layout from "../components/layout";
import { createProduct, getProductById, updateProduct } from "../lib/products";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home({}) {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
  });

  useEffect(async () => {
    if (router.query.type === "add") {
      console.log("add");
    } else if (router.query.type === "edit") {
      const res = await getProductById(router.query.id);
      setProduct(res.product);
    }
  }, [router.query]);

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
    if (router.query.type === "add") {
      await createProduct(data).then(() => {
        router.push("/sell");
      });
    } else if (router.query.type === "edit") {
      await updateProduct(data, router.query.id).then(() => {
        router.push("/sell");
      });
    }
  }

  const onChangeProduct = (e) => {
    const name = e.target.name;
    const newValue = { ...product, [name]: e.target.value };
    setProduct(newValue);
  };
  return (
    <Layout home>
      <Head>
        <title>Add/Edit Product | Clay Showroom</title>
      </Head>
      <section className="add-edit">
        {router.query && router.query.type === "add" && "ADD"}
        {router.query && router.query.type === "edit" && "EDIT"} PRODUCT
      </section>
      <div className="container">
        <form className="form" onSubmit={processSubmission}>
          <div className="form-item">
            <label for="name">Product Name</label>
            <input
              type="text"
              name="name"
              className="is-input"
              placeholder="Product Name"
              id="name"
              autoComplete="off"
              value={product.name}
              onChange={onChangeProduct}
            />
          </div>

          <div className="form-item">
            <label for="category">Category</label>
            <input
              type="text"
              name="category"
              className="is-input"
              placeholder="Category"
              id="category"
              autoComplete="off"
              value={product.category}
              onChange={onChangeProduct}
            />
          </div>
          <div className="form-item">
            <label for="price">Price</label>
            <input
              type="number"
              name="price"
              className="is-input"
              placeholder="Price"
              id="price"
              value={product.price}
              onChange={onChangeProduct}
            />
          </div>
          <div className="form-item">
            <label for="description">Description</label>
            <input
              type="text"
              name="description"
              className="is-input"
              placeholder="Description"
              id="description"
              autoComplete="off"
              value={product.description}
              onChange={onChangeProduct}
            />
          </div>
          <div className="form-item">
            <label for="imageUrl">ImageURL</label>
            <input
              type="text"
              name="imageUrl"
              className="is-input"
              placeholder="ImageUrl"
              id="imageUrl"
              autoComplete="off"
              value={product.imageUrl}
              onChange={onChangeProduct}
            />
          </div>

          <div className="form-item">
            <button type="submit" className="button is-button">
              SUBMIT
            </button>
          </div>

          <div className="form-item">
            <a href="#" className="button is-link">
              CANCEL
            </a>
          </div>
        </form>
      </div>

      <style jsx>
        {`
          .add-edit {
            margin-top: 11px;
            margin-left: 45px;
            padding-top: 6px;
          }
          .container {
            height: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .form {
            margin-top: 8px;
            position: relative;

            background: var(--tertiary-color);
            padding: 25px 10px 20px 10px;

            display: flex;
            flex-direction: column;
            width: 300px;
          }
          .avatar {
            position: absolute;
            background: #74b9ff;
            border-radius: 50%;
            top: -10%;
            left: 40%;
            z-index: 4;
          }
          .avatar img {
            width: 64px;
            height: 64px;
          }

          .form-item {
            padding: 15px 10px 10px 10px;
            flex: 1;
            display: flex;
            flex-direction: column;
            letter-spacing: 0.5px;
          }

          .form-item label {
            display: block;
            flex: 1;
            margin-bottom: 5px;
            cursor: pointer;
          }

          .form-item input {
            padding: 4px 0px;
            flex: 1;
            background: transparent;
            border-top: none;
            outline: none;
            border-left: none;
            border-right: none;
            caret-color: #fff;
            color: #1e1e1e;
            transition: all 200ms;
            border-bottom-color: #fff;
          }

          .form-item input:focus {
            border-bottom-color: var(--secondary-color);
          }

          ::placeholder,
          ::ms-input-placeholder,
          :ms-input-placeholder {
            color: #ccc;
            font-size: 12px;
          }

          .form-item button {
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
          .form-item button:hover {
            cursor: pointer;
            background: rgba(255, 56, 56, 0.7);
          }
          .form-item a {
            text-decoration: none;
          }

          .is-link {
            color: var(--secondary-color);
            flex: 1;
            font-size: 1em;
            font-weight: bold;
            text-align: center;
          }

          .is-link:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
