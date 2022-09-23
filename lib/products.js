export async function getLatestProductsData() {
  let response = await fetch(
    `${process.env.API_URL}/api/products`
  );
  let data = await response.json();

  return {
    products: data.products
  }; 
}

export async function createProduct(data) {
 
  return await fetch(`http://localhost:3001/api/products`, {
     method: "post",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(data),
   });
 
 }
 export async function updateProduct(data,id) {
 
  return await fetch(`http://localhost:3001/api/products/${id}`, {
     method: "put",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(data),
   });
 
 }

 export async function deleteProduct(id) {
 console.log("delete")
  return await fetch(`http://localhost:3001/api/products/${id}`, {
     method: "delete",
   });
 
 }

 export async function getProductById(id) {
 
  
 
    
   let response = await fetch(
    `http://localhost:3001/api/products/${id}`
  );
  let data = await response.json();

  return {
    product: data.product
  }; 
 }