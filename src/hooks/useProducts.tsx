import React, { useState, useEffect, useCallback } from "react";
import { Product } from "../models/product";
import getProducts from "../services/getProducts";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [limit] = useState(100);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const [data, error] = await getProducts({ limit, page });
    if (data) setProducts(data);
    setLoading(false);
  }, [page, limit]);

  useEffect(() => {
    fetchProducts();
  }, [page, limit, fetchProducts]);

  return { products, loading, page, setPage };
};

export default useProducts;
