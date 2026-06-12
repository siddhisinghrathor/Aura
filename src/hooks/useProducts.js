import { useEffect, useState } from "react";
import { wellnessProducts } from "../data/wellnessProducts";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setProducts(wellnessProducts);
    setLoading(false);
  }, []);

  return {
    products,
    loading,
    error,
  };
}

export default useProducts;