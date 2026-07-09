const BASE_URL = "https://fakestoreapi.com/products";

async function request(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

async function getProducts() {
  return request(BASE_URL);
}

async function getProductById(id) {
  return request(`${BASE_URL}/${id}`);
}

async function createProduct(product) {
  return request(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
}

async function updateProduct(id, product) {
  return request(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
}

async function deleteProduct(id) {
  return request(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
}

const productService = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default productService;
