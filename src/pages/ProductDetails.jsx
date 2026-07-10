import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import productService from "../services/productService";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Local state for the selected product and request status.
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch the selected product using the ID from the URL.
  async function loadProduct() {
    try {
      setLoading(true);

      const data = await productService.getProductById(id);

      setProduct(data);

      // Clear any previous error after a successful request.
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      // Always stop the loading state, whether the request succeeds or fails.
      setLoading(false);
    }
  }

  // Reload the product whenever the route parameter changes.
  useEffect(() => {
    loadProduct();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  
  if (!product) {
    return <h2 className="p-6 text-center">No product found.</h2>;
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Product image */}
        <div className="flex items-center justify-center rounded-lg border p-8">
          <img
            src={product.image}
            alt={product.title}
            className="h-96 object-contain"
          />
        </div>

        {/* Product information */}
        <div>
          <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">
            {product.category}
          </span>

          <h1 className="mt-4 text-3xl font-bold">{product.title}</h1>

          <p className="mt-4 text-gray-600">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>

          <p className="mt-6 text-4xl font-bold text-green-600">
            ${product.price}
          </p>

          <p className="mt-6 text-gray-700">{product.description}</p>

          <div className="mt-8">
            <button
              onClick={() => navigate(-1)}
              className="cursor-pointer rounded-md border px-5 py-2 transition-colors duration-200 hover:bg-gray-100"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
