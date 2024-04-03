import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';
import Homepage from 'routes/homepage/Homepage';
import ErrorPage from 'error-page';
import 'index.scss';
import Contact from 'routes/contact/Contact';
import Elte from 'routes/elte/Elte';
import Topbar from 'components/top-bar/Topbar';

function Layout() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/elte',
        element: <Elte />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
