import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { About } from './pages/AboutUs/AboutUs';
import { Shop } from './pages/Shop/Shop';
import { ShopSingle } from './pages/ShopSingle/ShopSingle';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <About /> */}
    {/* <Shop /> */}
    <ShopSingle />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
