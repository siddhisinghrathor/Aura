import { useEffect, useState } from "react";
import { wellnessProducts } from "../data/wellnessProducts";

function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const found = wellnessProducts.find((p) => p.id === id);
    if (found) {
      setProduct(found);
      setError(null);
    } else {
      setProduct(null);
      setError("Product not found");
    }
    setLoading(false);
  }, [id]);

  return {
    product,
    loading,
    error,
  };
}

export default useProduct;
