import { createContext, useContext, useState } from "react";
const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);
const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function addToCart(item) {
    cartList.map((prod) => console.log(typeof prod.quantity));
    const index = cartList.findIndex((prod) => prod.id === item.id);
    if (index !== -1) {
      const oldqty = cartList[index].quantity;
      const newCart = cartList.filter((prod) => prod.id !== item.id);
      item.quantity += oldqty;
      setCartList([...newCart, item]);
    } else {
      setCartList([...cartList, item]);
    }
    // console.log(`Mi cartttt es ${cartList}`);
  }
  const removeItem = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
  };
  const qtyTotal = () => {
    return cartList.reduce(
      (counter, prod) => (counter = counter + prod.quantity),
      0
    );
  };
  const totalPrice = () => {
    return cartList.reduce(
      (counter, prod) => counter + prod.cuantity * prod.price,
      0
    );
  };

  const emptyCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        //  Estados arriba, funciones abajo
        //Aca pongo mis variables globales
        cartList,
        addToCart,
        emptyCart,
        qtyTotal,
        totalPrice,
        removeItem,
        //  setCartList
      }}
    >
      {children /* aca estoy desestructurando children que veien en las prop */}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
