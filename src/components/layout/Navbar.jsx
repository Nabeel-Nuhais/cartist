import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 shadow">
      <Link to="/">Cartist</Link>

      <div className="flex gap-4">
        <Link to="/">Home</Link>

        <Link to="/add-product">
          Add Product
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;