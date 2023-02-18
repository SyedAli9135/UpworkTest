import React, { createContext, useState } from "react";
import { Product } from "../models/product";

export interface CartProduct extends Product {
  count: number;
}

interface CartContext {
  cartProducts: CartProduct[];
  setCartProducts?: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

export const CartContext = createContext<CartContext>({ cartProducts: [] });

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
