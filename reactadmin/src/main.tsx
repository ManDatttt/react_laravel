import React from 'react'
import ReactDOM from 'react-dom/client'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from './redux/store'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AuthMiddlewere from './middlewere/AuthMiddlewere';
import Layout from './components/layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import User from './pages/user/User'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <AuthMiddlewere> 
        <Layout />
      </AuthMiddlewere>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/user", element: <User /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
  </Provider>
)
