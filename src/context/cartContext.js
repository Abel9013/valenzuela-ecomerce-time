import React, { createContext, useContext } from "react";
import { contextApp } from "../App";

const cartContext = () => {
  // const context = createContext([]);
  const [string] = useContext(contextApp);
  console.log(contextApp);
  return <div>cartContext</div>;
};

export default cartContext;
