// import Item from "../Item/Item";
// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
import { useCartContext } from "../../context/CartContext";
import "../Item/cards.css";

const ItemDetail = ({ producto }) => {
  const { cartList, addToCart } = useCartContext();

  const onAdd = (cant) => {
    console.log(cant);
    addToCart({ ...producto, quantity: cant });
  };
  console.log(cartList);
  return (
    <div className="productos">
      {/* {console.log(producto)} */}
      <img src={producto.img} alt="imagen producto" />
      <div className="texto-producto">
        <h3>{producto.name} </h3>
        <p className="precio">Precio:{producto.price}</p>
        <p>Descripcion: {producto.description}</p>
        <p>Nos quedan solo {producto.stock}, aprovecha!</p>
        <button onClick={() => onAdd(4)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
