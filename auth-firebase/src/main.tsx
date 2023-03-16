import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/tailwind.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./screens/Profile";
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import ForgotPassword from './screens/auth/ForgotPassword';
import AuthContainer from './components/AuthContainer';
import NotFound from './screens/NotFound';

// credits to myself :D
console.log('%cProject by Messiaen Tibo','color: red; font-weight: bold; font-size: 18px;border: 1px solid red; padding: 2px;')

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
  },
  {
    path: "*",
    element: <NotFound/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="max-w-screen-x">

      <RouterProvider router={router}/>

    </div>
  </React.StrictMode>
);