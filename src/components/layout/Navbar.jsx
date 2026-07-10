import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-bold sm:text-2xl text-white transition-opacity duration-200 hover:opacity-80"
        >
          🛒 Cartist
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="rounded-md px-3 py-2 text-sm sm:px-4 sm:text-base text-white transition-colors duration-200 hover:bg-gray-800"
          >
            Home
          </Link>

          <Link
            to="/add-product"
            className="rounded-md border border-white px-3 py-2 text-sm sm:px-4 sm:text-base text-white transition-colors duration-200 hover:bg-white hover:text-black"
          >
            Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;