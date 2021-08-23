import React, { createContext, useState, useEffect } from "react";

export const ItemContext = createContext(null);

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState();
  const [itemUrl, setItemUrl] = useState("");
  const [globalArray, setGlobalArray] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("https://frakton.dev/articles.php");

      const data = await response.json();

      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <ItemContext.Provider
      value={{ items, itemUrl, setItemUrl, globalArray, setGlobalArray }}
    >
      {children}
    </ItemContext.Provider>
  );
};
