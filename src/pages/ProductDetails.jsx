import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import productService from "../services/productService";
import { useProducts } from "../hooks/useProducts";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import Modal from "../components/ui/Modal";

const ProductDetails = () => {
  const { id } = useParams();

  const { products, deleteProduct } = useProducts();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();

  // Local state for the selected product and request status.
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load the selected product from the shared state or API.

  // Delete the current product and return to the home page.
  async function handleDelete() {
    if (isDeleting) return;

    try {
      setIsDeleting(true);

      await deleteProduct(product.id);

      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  }

  // Reload the product whenever the route parameter or shared product list changes.
  useEffect(() => {
    async function loadProduct() {
      // Check if the product already exists in the shared state.
      const existingProduct = products.find((item) => item.id === Number(id));

      if (existingProduct) {
        setProduct(existingProduct);
        return;
      }

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

    loadProduct();
  }, [id, products]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!product) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl font-bold">Product Not Found</h2>

        <p className="mt-3 text-gray-600">
          The product you're looking for doesn't exist or may have been removed.
        </p>

        <Link
          to="/"
          className="mt-6 rounded-md bg-black px-5 py-3 text-white transition-colors hover:bg-gray-800"
        >
          Back to Home
        </Link>
      </div>
    );
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
            ⭐ {product.rating?.rate ?? "N/A"} ({product.rating?.count ?? 0}{" "}
            reviews)
          </p>
          <p className="mt-6 text-4xl font-bold text-green-600">
            ${product.price}
          </p>
          <p className="mt-6 text-gray-700">{product.description}</p>
          <div className="mt-8 flex gap-4">
            <Link
              to={`/edit-product/${product.id}`}
              className="cursor-pointer rounded-md border px-5 py-2 transition-colors duration-200 hover:bg-gray-100"
            >
              Edit Product
            </Link>

            <button
              onClick={() => setShowDeleteModal(true)}
              disabled={showDeleteModal}
              className="cursor-pointer rounded-md bg-red-600 px-5 py-2 text-white transition-colors duration-200 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <Modal
          isOpen={showDeleteModal}
          title="Delete Product"
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={handleDelete}
          confirmText="Delete"
          isDeleting={isDeleting}
        >
          <p>
            Are you sure you want to delete <strong>{product.title}</strong>?
          </p>
        </Modal>
      )}
    </div>
  );
};

export default ProductDetails;
