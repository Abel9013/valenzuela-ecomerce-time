import React from "react";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartList, emptyCart, totalPrice, removeItem } = useCartContext();
  return (
    <div>
      {cartList.map((prod) => (
        <>
          <li>
            Producto:{prod.name} - Cantidad:{prod.quantity} -
            <button
              onClick={() => {
                removeItem(prod.id);
              }}
            >
              x
            </button>
          </li>
          <br></br>
        </>
      ))}

      <h4>Precio Total:{totalPrice() !== 0 && totalPrice()}</h4>
      <button onClick={emptyCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
