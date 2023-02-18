import React, { useContext } from "react";
import { CartContext, CartProduct } from "../../global/CartContext";
import { Center, Image, Text, Button } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";

const CartItem: React.FC<CartProduct> = ({
  _id,
  description,
  imageUrl,
  name,
  price,
  count,
}) => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const handleUpdateCart = () => {
    let exists = cartProducts.find((prod) => prod._id === _id);
    if (!exists) return;
    if (exists.count === 1) {
      return setCartProducts?.([
        ...cartProducts.filter((prod) => prod._id !== _id),
      ]);
    }
    exists.count -= 1;
    let temp = cartProducts.filter((prod) => prod._id !== _id);
    temp.push(exists);
    setCartProducts?.(temp);
  };

  return (
    <Center p="10px" gap="10px" flexDir="row">
      <Image src={imageUrl} width="50x" height="50px" />
      <Text>Name: {name}</Text>
      <Text>Unit Price: ${price}</Text>
      <Text>Quantity: {count}</Text>
      <Text>Total: ${count && price ? count * price : null}</Text>
      <Button onClick={handleUpdateCart}>
        <RxCross2 />
      </Button>
    </Center>
  );
};

export default CartItem;
