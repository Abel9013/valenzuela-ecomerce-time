import { createContext, useContext, useState } from "react";
const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);
const CartContextProvider = ({ children }) => {
  //Esto lo creo para tener estados y funciones(globales) aca y no en APP
  //A la vez enmascaro mi cartcontextProvider
  const [cartList, setCartList] = useState([]);

  function addToCart(item) {
    setCartList([...cartList, item]);
  }

  return (
    <CartContext.Provider
      value={{
        //  Estados arriba, funciones abajo
        cartList,
        addToCart,
        //  setCartList
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
