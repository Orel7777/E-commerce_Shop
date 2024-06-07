import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AliShopContextProvider from './Componets/Context/AliShopContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AliShopContextProvider>
      <App />
    </AliShopContextProvider>
  </React.StrictMode>
);
