import { useProducts } from "../hooks/useProducts";

const Home = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Products</h1>

      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
};

export default Home;
