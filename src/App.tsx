import React from "react";
import Products from "./pages/Products";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const App: React.FC<Props> = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
