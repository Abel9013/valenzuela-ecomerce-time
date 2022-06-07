import React from "react";
import { NavLink, Link } from "react-router-dom";
// import CartContext from "../../context/CartContext";
import { CartWidget } from "../CartWidget/CartWidget";
// import { CartWidget } from "./CartWidget";
import { useCartContext } from "../../context/CartContext";
import "./NavBar.css";
import carry from "../img/shopping-cart white.svg";
// import "./components/navbar.css";
const NavBar = () => {
  const { qtyTotal } = useCartContext();
  return (
    <>
      <header className="header">
        {/* <CartContext /> */}
        <div className="header__contenedor">
          <div className="header__barra">
            <div className="header__logo">
              <CartWidget />
            </div>
            <div className="header__logo">
              <Link to="/cart">
                {qtyTotal()}
                <img src={carry} alt="cart" />
              </Link>
            </div>

            <div className="navegacion">
              <a href="##" className="navegacion__link">
                <Link to="/">Inicio</Link>
              </a>
              <a href="##" className="navegacion__link">
                Productos
              </a>
              <a href="##" className="navegacion__link">
                <NavLink to="/category/phone"> Celulares </NavLink>
              </a>
              <a href="##" className="navegacion__link">
                <NavLink to="/category/smartbands"> Smartbands </NavLink>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
