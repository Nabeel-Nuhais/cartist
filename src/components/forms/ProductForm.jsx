import Input from "../ui/Input";

const ProductForm = ({
  title,
  submitText,
  formData,
  errors,
  onChange,
  onSubmit,
  isSubmitting,
  loadingText,
}) => {
  return (
    <div className="mx-auto max-w-xl p-6">
      <h1 className="mb-6 text-3xl font-bold">{title}</h1>

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={onChange}
            error={errors.title}
          />
        </div>

        <div className="mb-4">
          <Input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={onChange}
            error={errors.price}
          />
        </div>

        <div className="mb-4">
          <Input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={onChange}
            error={errors.category}
          />
        </div>

        <div className="mb-4">
          <Input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={onChange}
            error={errors.image}
          />
        </div>

        <div className="mb-4">
          <Input
            as="textarea"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={onChange}
            rows={5}
            error={errors.description}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer rounded bg-black px-5 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? loadingText : submitText}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
