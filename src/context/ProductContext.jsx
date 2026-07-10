import { createContext, useEffect, useState } from "react";
import productService from "../services/productService";

// Shared context for managing product-related state across the application.
const ProductContext = createContext();

export function ProductProvider({ children }) {
  // Shared application state.
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Retrieves products from the API and updates shared state.
  async function loadProducts() {
    try {
      setLoading(true);

      const data = await productService.getProducts();

      setProducts(data);

      // Clear any previous error after a successful request.
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      // Always stop the loading state, whether the request succeeds or fails.
      setLoading(false);
    }
  }

  // Creates a new product and updates the shared product list.
  async function addProduct(product) {
    const newProduct = await productService.createProduct(product);

    // Add the newly created product to the existing list in client-side state.
    setProducts((prevProducts) => [...prevProducts, newProduct]);

    return newProduct;
  }

  // Updates an existing product and synchronizes the shared product list.
  async function updateProduct(id, updatedProduct) {
    const product = await productService.updateProduct(id, updatedProduct);

    setProducts((prevProducts) =>
      prevProducts.map((item) => (item.id === id ? product : item)),
    );

    return product;
  }

  // Deletes a product and removes it from the shared product list.
  async function deleteProduct(id) {
    await productService.deleteProduct(id);

    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id),
    );
  }

  // Load products when the provider is mounted.
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        loadProducts,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext };
