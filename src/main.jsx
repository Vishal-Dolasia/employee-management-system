import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Login from './pages/login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Employee from './pages/Employee.jsx'
import Home from './pages/Home.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";



const router = createBrowserRouter([
  {
    path:'/',
    element: <Navigate to="/home"/>
  },
  {
    path:'/login',
    element:<Login />,
  },
  {
    path:'/home',
    element:<Home />,
  },
  {
    path:'/employee',
    element:<Employee />,
  },
  {
    path:'/dashboard',
    element:<Dashboard/>,
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
)

