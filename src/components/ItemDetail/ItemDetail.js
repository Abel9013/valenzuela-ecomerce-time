// import Item from "../Item/Item";
import "../Item/cards.css";

const ItemDetail = ({ producto }) => {
  return (
    <div className="productos">
      {console.log(producto)}
      <img src={producto.img} alt="imagen producto" />
      <div className="texto-producto">
        <h3>{producto.name} </h3>
        <p className="precio">Precio:{producto.price}</p>
        <p>Descripcion: {producto.description}</p>
        <p>Nos quedan solo {producto.stock}, aprovecha!</p>
      </div>
    </div>
  );
};

export default ItemDetail;
