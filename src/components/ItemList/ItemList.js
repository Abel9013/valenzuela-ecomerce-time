import React from "react";
import { Item } from "../Item/Item";
import "../Item/cards.css";

export const ItemList = ({ items }) => {
  return (
    <div className="listado-productos contenedor">
      {items.map((item) => (
        <Item {...item} key={item.id} />
        // el spread operator me desestructura el array
      ))}
    </div>
  );
};
// El mapeo es para ir iterando los objetos del array
