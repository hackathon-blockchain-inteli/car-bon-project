import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import Exchange from './pages/Exchange/Exchange.tsx';
import Transparency from './pages/Transparency/Transparency.tsx';
import Home from './pages/Home/Home.tsx';
import Cars from './pages/Cars/Cars.tsx';
import Faq from './pages/Faq/Faq.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cars",
    element: <Cars />,
  },

  {
    path: "/exchange",
    element: <Exchange />,
  },

  {
    path: "/transparency",
    element: <Transparency />,
  },

  {
    path: "/audit",
    element: <App />,
  },

  {
    path: "/signup",
    element: <App />,
  },

  {
    path: "/faq",
    element: <Faq />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
