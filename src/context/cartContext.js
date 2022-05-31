import { createContext, useContext, useState } from "react";
const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);
const CartContextProvider = ({ children }) => {
  //Esto lo creo para tener estados y funciones(globales) aca y no en APP
  //A la vez enmascaro mi cartcontextProvider
  const [cartList, setCartList] = useState([]);

  // function addToCart( item ) {
  //   setCartList([...cartList, item]);
  // }
  function addToCart(item, quantity) {
    const newItem = { ...item, quantity };
    setCartList([...cartList, newItem]);
    console.log(cartList);
  }

  return (
    <CartContext.Provider
      value={{
        //  Estados arriba, funciones abajo
        //Aca pongo mis variables globales
        cartList,
        addToCart,
        //  setCartList
      }}
    >
      {children /* aca estoy desestructurando children que veien en las prop */}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
