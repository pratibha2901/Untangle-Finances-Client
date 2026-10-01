import React from 'react';
import ReactDOM from 'react-dom/client';
import  './styles/index.css';
import { RouterProvider } from 'react-router/dom';
import { mainRoutes } from '@routes/mainRoutes';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  
  root.render(
    <React.StrictMode>
      <RouterProvider router={mainRoutes}>
       
       </RouterProvider>
    </React.StrictMode>,
  );
}
