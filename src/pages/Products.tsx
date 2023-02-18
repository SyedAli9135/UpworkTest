import React from "react";
import { Flex } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import FullScreenLoader from "../components/FullScreenLoader";
import ProductItem from "../components/ProductItem/ProductItem";

const Products = () => {
  const { products, loading } = useProducts();

  if (loading) return <FullScreenLoader />;
  return (
    <Flex
      w="100vw"
      h="100vh"
      gap="20px"
      flexWrap="wrap"
      p="20px"
      overflowX="hidden"
      overflowY="auto"
      align="center"
      justify="center"
    >
      {products?.map((item) => (
        <ProductItem
          _id={item._id}
          imageUrl={item.imageUrl}
          description={item.description}
          name={item.name}
          price={item.price}
        />
      ))}
    </Flex>
  );
};

export default Products;
