export const listarProductos = (stock) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stock);
    }, 2000);
  });
};
// export const listarProductos = (stock) => {
//   return new Promise((resolve) => {
//     setTimeout((id) => {
//       const query = id
//       resolve(query);
//     }, 2000);
//   });
// };
