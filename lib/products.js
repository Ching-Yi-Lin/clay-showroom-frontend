export async function getLatestProductsData() {
  let response = await fetch(
    `${process.env.API_URL}/api/articles`
  );
  let data = await response.json();

  return {
    products: data.articles
  }; 
}
