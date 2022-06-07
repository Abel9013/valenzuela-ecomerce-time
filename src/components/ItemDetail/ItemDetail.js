import "../Item/cards.css";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  const { cartList, addToCart } = useCartContext();
  const onAdd = (item, count) => {
    console.log(`este es ${count} y es ${typeof count}`);
    addToCart({ ...producto, quantity: count });
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
        <ItemCount item={producto} onAdd={onAdd} />
        <p>Nos quedan solo {producto.stock}, aprovecha!</p>
      </div>
    </div>
  );
};

export default ItemDetail;
