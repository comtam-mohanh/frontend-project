import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { About } from './pages/AboutUs/AboutUs';
import { Shop } from './pages/Shop/Shop';
import { ShopSingle } from './pages/ShopSingle/ShopSingle';
import { Home } from './pages/HomePage/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Error } from './pages/ErrorPage/Error';
import { Routes } from './routes';

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
    errorElement: <Error />,
    // children: [
    //   {
    //     path: "/",
    //     element: <About />,
    //     errorElement: <Error />
    //   },
    // ],
  },
  {
    path: Routes.ABOUT_US,
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: Routes.SHOP,
    element: <Shop />,
    errorElement: <Error />,
  },
  {
    path: Routes.SHOP_SINGLE,
    element: <ShopSingle />,
    errorElement: <Error />,
  },
  {
    path: Routes.ERROR,
    element: <Error />,
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <About /> */}
    {/* <Shop /> */}
    {/* <ShopSingle /> */}
    {/* <Home /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
