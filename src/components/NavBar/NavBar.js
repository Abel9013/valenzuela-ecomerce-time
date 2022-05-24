import React from "react";
import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
// import { CartWidget } from "./CartWidget";
import "./NavBar.css";
// import "./components/navbar.css";
const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="header__contenedor">
          <div className="header__barra">
            <div className="header__logo">
              {/* <img
                src="./9004672_timer_time_clock_alarm_bell_icon.svg"
                alt="logo nucleus"
              /> */}
              <CartWidget />
            </div>
            <div className="navegacion">
              <a href="##" className="navegacion__link">
                Inicio
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
