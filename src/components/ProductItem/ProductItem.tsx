import React, { useContext } from "react";
import {
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
  Image,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Product } from "../../models/product";
import { CartContext } from "../../global/CartContext";

const ProductItem: React.FC<Product> = ({
  imageUrl,
  name,
  description,
  price,
  _id,
}) => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const handleAddToCart = () => {
    let exists = cartProducts.find((prod) => prod._id === _id);
    if (!exists)
      return setCartProducts?.([
        ...cartProducts,
        { imageUrl, name, description, price, _id, count: 1 },
      ]);
    exists.count += 1;
    let temp = cartProducts.filter((prod) => prod._id !== _id);
    temp.push(exists);
    setCartProducts?.(temp);
  };

  return (
    <Card shadow="lg" cursor="pointer" maxW="sm">
      <CardBody>
        <Image
          src={imageUrl}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button onClick={handleAddToCart} variant="solid" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
