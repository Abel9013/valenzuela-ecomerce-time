import { stock } from "./productos";
export const listarProductos = (stock) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stock);
    }, 2000);
  });
};
// Promesa para ItemDetaill
export const getFetch = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log(`Este es mi id: ${id} y es un ${typeof id}`);
      const query = id ? stock.find((producto) => producto.id === id) : stock;
      // console.log(`Mi promesa: ${query}`);
      resolve(query);
    }, 2000);
  });
};
