import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Router } from 'react-router';
import { RouterProvider, createBrowserRouter } from 'react-router';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Profile from './pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>
  }, 
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/aboutus',
    element: <AboutUs/>
  },
  {
    path: '/profile/:profileId',
    element: <Profile/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
);
