import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ item, onAdd }) => {
  const [count, setCount] = useState(1);
  const addCount = (num) => {
    setCount(count + num);
  };
  return (
    <>
      <div className="itemCount">
        <h3 className="cont">{count}</h3>
        <div className="counter">
          <button
            className="btn"
            onClick={() => {
              addCount(-1);
            }}
            disabled={count === 1 ? true : false}
          >
            -
          </button>
          <button
            className="btn"
            onClick={() => {
              addCount(+1);
            }}
            disabled={count === item.stock ? true : false}
          >
            +
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            onAdd(item, count);
            // onAdd(item, count);}}
          }}
        >
          Agregar al Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;

// import React, { useState } from "react";
// import "./ItemCount.css";

// const ItemCount = ({ stock, initial }) => {
//   const [count, setCount] = useState(initial);
//   const handleAdd = () => {
//     if (stock > count) {
//       setCount(count + 1);
//     } else {
//       console.log("Sin stock");
//     }
//   };
//   const handleSubtract = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };
//   return (
//     <>
//       <h3 className="cont">{count}</h3>
//       <button className="btn" onClick={handleSubtract}>
//         -
//       </button>
//       <button className="btn" onClick={handleAdd}>
//         +
//       </button>
//     </>
//   );
// };

// export default ItemCount;
