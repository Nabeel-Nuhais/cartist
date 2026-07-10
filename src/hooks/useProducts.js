import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

// Custom hook to access the shared product context.
export function useProducts() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider.");
  }

  return context;
}