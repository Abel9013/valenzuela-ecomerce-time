import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

export const Item = ({
  id,
  name,
  img,
  description,
  stock,
  price,
  category,
}) => {
  return (
    <div className="productos">
      <img src={img} alt="imagen producto" />
      <div className="texto-producto">
        <h3>{name} </h3>
        <p className="precio">{price}</p>
        <Link to={`/detalle/${id}`}>
          <a href="##" className="btn">
            +info
          </a>
        </Link>
      </div>
    </div>
  );
};
