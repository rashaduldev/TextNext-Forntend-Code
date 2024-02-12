import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import UserDetails from './Components/Home/UserDetails/UserDetails';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('https://dummyjson.com/users')
      },
      {
        path:'/user/:id',
        element: <UserDetails></UserDetails>,
        loader:()=>fetch('https://dummyjson.com/users')
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position="top-right" autoClose={3000} />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
