import React from "react";
import { Routes } from "./src/router";
import { GamesProvider } from "./src/context/gameContext";
import { CartProvider } from "./src/context/cartContext";

export default function App() {
  return (
    <>
      <CartProvider>
        <GamesProvider>
          <Routes />
        </GamesProvider>
      </CartProvider>
    </>
  );
}
