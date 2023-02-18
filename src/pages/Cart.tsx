import React, { useContext } from "react";
import { CartContext } from "../global/CartContext";
import { Flex } from "@chakra-ui/react";
import CartItem from "../components/CartItem/CartItem";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const Cart: React.FC<Props> = () => {
  const { cartProducts } = useContext(CartContext);

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartProducts.forEach((prod) =>
      prod.price ? (totalPrice += prod.count * prod.price) : null
    );
    return totalPrice;
  };

  return (
    <Flex flexDir="row">
      <Flex
        flex={0.7}
        h="100vh"
        gap="20px"
        flexDir="column"
        p="20px"
        overflowX="hidden"
        overflowY="auto"
        align="flex-start"
      >
        {cartProducts?.map((item) => (
          <CartItem
            _id={item._id}
            imageUrl={item.imageUrl}
            description={item.description}
            name={item.name}
            price={item.price}
            count={item.count}
          />
        ))}
      </Flex>
      <Flex fontSize="22px" flex={0.3}>
        Total: {getTotalPrice()}
      </Flex>
    </Flex>
  );
};

export default Cart;
