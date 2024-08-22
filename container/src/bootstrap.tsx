import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

//???
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Impossibile trovare l'elemento con id 'root'");
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);