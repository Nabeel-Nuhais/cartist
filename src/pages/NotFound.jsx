import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-extrabold text-gray-800">404</h1>

      <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>

      <p className="mt-3 max-w-md text-gray-600">
        Sorry, the page you're looking for doesn't exist or may have been
        moved.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-md bg-black px-6 py-3 text-white transition-colors duration-200 hover:bg-gray-800"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;