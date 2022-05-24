import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
// import { getFetch } from "../../helpers/getFetch";
import { listarProductos } from "../helpers/getFech";
import { stock } from "../helpers/productos";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { detalleId } = useParams();

  console.log(detalleId);
  useEffect(
    () => {
      // listarProductos(detalleId) // fetch llamada a una api
      listarProductos(stock) // fetch llamada a una api
        .then((respuesta) => setProducto(respuesta))
        .catch((err) => console.log(err));
      // .finally(()=>setLoading(false))
    },
    [detalleId],
    []
  );

  return (
    <div>
      ItemDetailContainer
      <div>
        <ItemDetail producto={producto} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
