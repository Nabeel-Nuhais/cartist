import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="flex h-full flex-col rounded-lg border bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl transition-shadow hover:shadow-lg">
      <div className="flex h-48 items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      <h2 className="mt-4 line-clamp-2 font-semibold">{product.title}</h2>

      <p className="mt-2 text-sm text-gray-500">{product.category}</p>

      <p className="mt-3 text-2xl font-bold text-green-600">${product.price}</p>

      <p className="mt-2 mb-2 text-sm text-gray-600">
        ⭐ {product.rating.rate} ({product.rating.count} reviews)
      </p>

      <Link
        to={`/products/${product.id}`}
        className="mt-auto block w-full rounded-md bg-black py-2 text-center text-white transition-colors duration-200 hover:bg-gray-800"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
