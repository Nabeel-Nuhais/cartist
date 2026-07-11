import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import ProductForm from "../components/forms/ProductForm";
import { validateProduct } from "../utils/validateProduct";

const AddProduct = () => {
  // Form state for creating a new product.
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const { addProduct } = useProducts();

  function handleChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  // Submit the new product and navigate back to the product list.
  async function handleSubmit(e) {
    e.preventDefault();

    if (isSubmitting) return;

    const validationErrors = validateProduct(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);

      await addProduct(formData);

      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <ProductForm
      title="Add Product"
      submitText="Create Product"
      loadingText="Creating..."
      formData={formData}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    />
  );
};

export default AddProduct;
