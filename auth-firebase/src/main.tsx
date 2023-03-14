import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/tailwind.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./screens/Profile";
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import ForgotPassword from './screens/auth/ForgotPassword';
import AuthContainer from './components/AuthContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>,
  },
  {
    path: "/auth",
    element: <AuthContainer/>,
    children: [
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword/>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="max-w-screen-xl">

      <RouterProvider router={router}/>

    </div>
  </React.StrictMode>
);