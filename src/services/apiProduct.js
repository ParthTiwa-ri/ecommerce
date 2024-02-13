export async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function fetchProductsSearch(item) {
  try {
    const res = await fetch(`https://dummyjson.com/products/search?q=${item}`);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
