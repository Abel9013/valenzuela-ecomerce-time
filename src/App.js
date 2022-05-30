// import logo from "./logo.svg";
import "./App.css";
import { ItemListContainer } from "./components/Containers/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemCount from "./components/ItemCount/ItemCount";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";
// import CartContext from "./context/CartContext";
import CartContextProvider from "./context/CartContext";

// console.log(CartContext);
function App() {
  // let { string } = "comida";
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          {/* Todos los componentes debajo de CartContextProvider pasan a ser sus "childrens" */}
          <NavBar />
          {/* <contextApp.Provider value={{ string }} /> */}
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Hey wazappp" />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting="Hey wazappp" />}
            />
            {/* <Route path="/cartcontext" element={<CartContext />} /> */}
            <Route
              path="/count"
              element={<ItemCount stock={5} initial={0} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
