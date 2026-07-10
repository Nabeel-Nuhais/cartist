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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };
