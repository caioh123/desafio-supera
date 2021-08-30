import React, { createContext, useState, useContext, useEffect } from "react";
import jsonData from "../products.json";

export const GameContext = createContext({});

export const CartContext = createContext([]);

export const GamesProvider = (props) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const products = jsonData.map((product) => {
      const imageKey = product.image.replace(/[-]/g, "_").split(".")[0];

      return { ...product, imageKey };
    });
    setGames(products);
  }, []);

  return (
    <GameContext.Provider value={{ games }}>
      {props.children}
    </GameContext.Provider>
  );
};

export const useGames = () => useContext(GameContext);
