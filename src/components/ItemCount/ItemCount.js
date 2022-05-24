import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);
  const handleAdd = () => {
    if (stock > count) {
      setCount(count + 1);
    } else {
      console.log("Sin stock");
    }
  };
  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h3 className="cont">{count}</h3>
      <button className="btn" onClick={handleSubtract}>
        -
      </button>
      <button className="btn" onClick={handleAdd}>
        +
      </button>
    </>
  );
};

export default ItemCount;
