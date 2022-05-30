import React from "react";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartList } = useCartContext();
  return (
    <div>
      {cartList.map((prod) => (
        <li>{prod.name}</li>
      ))}
    </div>
  );
};

export default Cart;
