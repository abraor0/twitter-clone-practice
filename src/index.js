import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/twitter-clone-practice',
    element: <Root />
  },
  {
    basename: '/twitter-clone-practice'
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
