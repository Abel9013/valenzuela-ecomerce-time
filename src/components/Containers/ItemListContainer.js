import React, { useEffect, useState } from "react";
import { stock } from "../helpers/productos";
import { ItemList } from "../ItemList/ItemList";
import { listarProductos } from "../helpers/getFech";
import { useParams } from "react-router-dom";
export const ItemListContainer = (prop) => {
  const [items, setItems] = useState([]); //Aca guardo mis productos
  const [loading, setLoading] = useState(false); //Para mostrar el cargando...
  const { id } = useParams();
  console.log(`Mi categoria es: ${id}`);
  useEffect(() => {
    setLoading(true); //cambio el valor para no mostrar el 'cargando...'
    if (id) {
      listarProductos(stock) //Funcion encargada de devolvernos los productos
        .then((res) => {
          setItems(res.filter((prods) => prods.category === id));
          //Guardo la respuesta en la variable items
        })
        .catch((err) => console.log(err)) //Atrapo el error en caso de que exista
        .finally(() => {
          setLoading(false);
        });
    } else {
      listarProductos(stock) //Funcion encargada de devolvernos los productos
        .then((res) => {
          //Guardo la respuesta en la variable items
          setItems(res);
        })
        .catch((err) => console.log(err)) //Atrapo el error en caso de que exista
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      <h2>{prop.greeting}</h2>
      {loading ? <h3>CargandoOoOoO</h3> : <ItemList items={items} />}
    </>
  );
};
