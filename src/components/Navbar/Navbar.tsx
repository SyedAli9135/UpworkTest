import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaProductHunt } from "react-icons/fa";
import { Button, Center } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../global/CartContext";

const Navbar = () => {
  const { cartProducts } = useContext(CartContext);
  const links = [
    { label: "Products", to: "/products", Icon: FaProductHunt },
    { label: "Cart", to: "/cart", Icon: AiOutlineShoppingCart },
  ];
  return (
    <Center p="20px" gap="20px" borderBottom="1px solid #DADADA">
      {links.map(({ to, label, Icon }) => (
        <NavLink to={to}>
          <Button display="flex" flexDir="row" gap="10px" pos="relative">
            {label} <Icon />
            {label === "Cart" && cartProducts.length ? (
              <Center
                pos="absolute"
                top="-10px"
                right="-10px"
                p="5px"
                w="25px"
                h="25px"
                borderRadius="100vh"
                bgColor="red.500"
                color="white"
              >
                {cartProducts?.length}
              </Center>
            ) : null}
          </Button>
        </NavLink>
      ))}
    </Center>
  );
};

export default Navbar;
