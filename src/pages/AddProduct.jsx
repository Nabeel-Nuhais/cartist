import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import Input from "../components/ui/Input";

const AddProduct = () => {
  // Form state for creating a new product.
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  // Simple form validation to ensure required fields are filled.
  function validateForm() {
    const newErrors = {};

    try {
      new URL(formData.image);
    } catch {
      newErrors.image = "Please enter a valid image URL.";
    }

    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!formData.price || Number(formData.price) <= 0) {
      newErrors.price = "Price must be greater than 0.";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required.";
    }

    if (!formData.image.trim()) {
      newErrors.image = "Image URL is required.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const navigate = useNavigate();

  const { addProduct } = useProducts();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Submit the new product and navigate back to the product list.
  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await addProduct(formData);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="mx-auto max-w-xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Add Product</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            error={errors.title}
          />
        </div>

        <div className="mb-4">
          <Input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            error={errors.price}
          />
        </div>

        <div className="mb-4">
          <Input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            error={errors.category}
          />
        </div>

        <div className="mb-4">
          <Input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            error={errors.image}
          />
        </div>

        <div className="mb-4">
          <Input
            as="textarea"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            error={errors.description}
          />
        </div>

        <button
          type="submit"
          className="rounded cursor-pointer bg-black px-5 py-3 text-white"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
