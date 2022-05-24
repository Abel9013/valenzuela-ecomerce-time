import React from "react";
import { Link } from "react-router-dom";
import reloj from "../img/9004672_timer_time_clock_alarm_bell_icon.svg";
export const CartWidget = () => {
  return (
    <>
      <Link to="/">
        <img src={reloj} alt="reloj" />
      </Link>
    </>
  );
};
