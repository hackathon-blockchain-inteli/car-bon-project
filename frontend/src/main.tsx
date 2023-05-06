import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import Exchange from './pages/Exchange/Exchange.tsx';
import Transparency from './pages/Transparency/Transparency.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cars",
    element: <App />,
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
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
