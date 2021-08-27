import React from 'react';
import { Routes } from './src/router';
import { GamesProvider } from './src/context/context';

export default function App() {
  return (
    <>
    <GamesProvider>
      <Routes />
    </GamesProvider>
    </>
  );
}

