// Simple client-side validation for product form data.
export function validateProduct(formData) {
  const errors = {};

  if (!formData.title.trim()) {
    errors.title = "Title is required.";
  }

  if (!formData.price || Number(formData.price) <= 0) {
    errors.price = "Price must be greater than 0.";
  }

  if (!formData.category.trim()) {
    errors.category = "Category is required.";
  }

  if (!formData.image.trim()) {
    errors.image = "Image URL is required.";
  } else {
    try {
      new URL(formData.image);
    } catch {
      errors.image = "Please enter a valid image URL.";
    }
  }

  if (!formData.description.trim()) {
    errors.description = "Description is required.";
  }

  return errors;
}
