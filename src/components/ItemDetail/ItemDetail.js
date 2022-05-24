import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { detalleId } = useParams();
  return (
    <div>
      ItemDetail
      {console.log(detalleId)}
      {console.log(typeof detalleId)}
    </div>
  );
};

export default ItemDetail;
