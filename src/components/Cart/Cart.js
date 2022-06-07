import React from "react";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartList, emptyCart } = useCartContext();
  return (
    <div>
      {console.log(cartList)}
      {cartList.map((prod) => (
        <li>
          Producto:{prod.name} - Cantidad:{prod.quantity} -
          <button>Eliminar</button>
        </li>
      ))}
      <button onClick={emptyCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
