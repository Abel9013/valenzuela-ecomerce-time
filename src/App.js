// import logo from "./logo.svg";
import "./App.css";
import { ItemListContainer } from "./components/Containers/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemCount from "./components/ItemCount/ItemCount";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import Cart from "./components/Cart/Cart";
// import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";

// import Normalize from "react-normalize";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Hey wazappp" />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Hey wazappp" />}
          />
          <Route path="/count" element={<ItemCount stock={5} initial={0} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
